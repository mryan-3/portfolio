
# UploadThing Implementation Guide

A comprehensive guide for implementing UploadThing with Next.js frontend and Express.js backend.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Server-Side Setup](#server-side-setup)
- [Client-Side Setup](#client-side-setup)
- [Implementation Approaches](#implementation-approaches)
- [Advanced Patterns](#advanced-patterns)
- [Troubleshooting](#troubleshooting)
- [Best Practices](#best-practices)

## Overview

UploadThing is a file upload service that provides secure, scalable file uploads with built-in React components and TypeScript support. This guide covers implementation in a monorepo structure with separate client and server applications.

### Architecture
```
project/
├── client/          # Next.js frontend
└── server/          # Express.js backend
```

## Prerequisites

### Required Dependencies

**Server:**
```json
{
  "uploadthing": "^7.7.2"
}
```

**Client:**
```json
{
  "@uploadthing/react": "^7.3.1",
  "uploadthing": "^7.7.2"
}
```

### Environment Variables

**Server (.env):**
```env
UPLOADTHING_TOKEN=your_uploadthing_token
CALLBACK_URL=http://localhost:8001/api/uploadthing
```

**Client (.env.local):**
```env
NEXT_PUBLIC_SERVER_URL=http://localhost:8001
```

## Server-Side Setup

### 1. Create Upload Router

Create `server/router/v1/upload-thing.ts`:

```typescript
import { Logger } from 'borgen' // or your logging library
import { createUploadthing, type FileRouter } from 'uploadthing/express'

const f = createUploadthing()

export const uploadRouter = {
  // Image upload endpoint
  imageUploader: f({
    image: {
      maxFileSize: '4MB',
      maxFileCount: 5,
    },
  })
    .middleware(async ({ req }) => {
      // Optional: Add authentication/authorization
      // const user = await getUserFromRequest(req)
      // if (!user) throw new Error('Unauthorized')

      return {}; // metadata to pass to onUploadComplete
    })
    .onUploadComplete(async ({ file, metadata }) => {
      Logger.info({
        message: `Upload complete: ${file.name} -> ${file.url}`,
      })

      // Store file info in database if needed
      // await saveFileToDatabase({
      //   url: file.ufsUrl, // Note: use ufsUrl for the actual file URL
      //   key: file.key,
      //   name: file.name
      // })

      return {
        url: file.ufsUrl, // Use ufsUrl instead of url
        key: file.key,
        name: file.name,
        size: file.size
      }
    }),

  // PDF upload endpoint
  documentUploader: f({
    pdf: {
      maxFileSize: '16MB',
      maxFileCount: 1,
    },
  })
    .middleware(async () => ({ }))
    .onUploadComplete(async ({ file }) => {
      return {
        url: file.ufsUrl,
        key: file.key,
        name: file.name
      }
    }),

  // Generic file uploader
  fileUploader: f({
    blob: {
      maxFileSize: '32MB',
      maxFileCount: 10,
    },
  })
    .middleware(async () => ({ }))
    .onUploadComplete(async ({ file }) => {
      return {
        url: file.ufsUrl,
        key: file.key,
        name: file.name
      }
    }),
} satisfies FileRouter

export type OurFileRouter = typeof uploadRouter
```

### 2. Setup Express Route Handler

In your main `server/app.ts`:

```typescript
import express from 'express'
import { createRouteHandler } from 'uploadthing/express'
import { uploadRouter } from './router/v1/upload-thing'

const app = express()

// UploadThing route handler
app.use(
  '/api/uploadthing',
  createRouteHandler({
    router: uploadRouter,
    config: {
      token: process.env.UPLOADTHING_TOKEN!,
      callbackUrl: process.env.CALLBACK_URL!,
    },
  })
)
```

## Client-Side Setup

### 1. Create UploadThing Client

Create `client/src/lib/uploadthing.ts`:

```typescript
import { generateReactHelpers } from "@uploadthing/react";

export const { useUploadThing, uploadFiles } = generateReactHelpers({
  url: process.env.NEXT_PUBLIC_SERVER_URL + "/api/uploadthing",
});
```

### 2. Create Upload Utilities

Create `client/src/lib/upload.ts`:

```typescript
import {
  generateUploadButton,
  generateUploadDropzone
} from '@uploadthing/react'
import { uploadFiles } from './uploadthing'

// Built-in components
export const UploadButton = generateUploadButton({
  url: process.env.NEXT_PUBLIC_SERVER_URL + '/api/uploadthing'
})

export const UploadDropzone = generateUploadDropzone({
  url: process.env.NEXT_PUBLIC_SERVER_URL + '/api/uploadthing'
})

// Custom upload function for processed files
export const uploadProcessedFile = async (
  endpoint: string, // e.g., "imageUploader"
  file: File,
  onProgress?: (progress: number) => void
): Promise<{ url: string; key: string }> => {
  try {
    const uploadedFiles = await uploadFiles(endpoint, {
      files: [file],
      onUploadProgress: ({ progress }) => {
        onProgress?.(progress);
      },
    })

    if (!uploadedFiles?.[0]) {
      throw new Error('Upload failed - no file returned')
    }

    const uploadedFile = uploadedFiles[0]

    if (!uploadedFile.url || !uploadedFile.key) {
      throw new Error('Upload incomplete - missing URL or key')
    }

    return {
      url: uploadedFile.url,
      key: uploadedFile.key
    }
  } catch (error) {
    console.error('Upload error:', error)
    throw error
  }
}

// Upload multiple files
export const uploadMultipleFiles = async (
  endpoint: string,
  files: File[],
  onProgress?: (progress: number) => void
): Promise<Array<{ url: string; key: string; name: string }>> => {
  try {
    const uploadedFiles = await uploadFiles(endpoint, {
      files,
      onUploadProgress: ({ progress }) => {
        onProgress?.(progress);
      },
    })

    return uploadedFiles.map(file => ({
      url: file.url,
      key: file.key,
      name: file.name
    }))
  } catch (error) {
    console.error('Multi-upload error:', error)
    throw error
  }
}
```

## Implementation Approaches

### 1. Using Built-in Components

The simplest approach using UploadThing's pre-built components:

```tsx
'use client'

import { UploadButton, UploadDropzone } from '@/lib/upload'

export function SimpleUploadForm() {
  return (
    <div className="space-y-4">
      {/* Upload Button */}
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />

      {/* Upload Dropzone */}
      <UploadDropzone
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("Files: ", res);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }}
      />
    </div>
  )
}
```

### 2. Custom Implementation with React Hook

Using the `useUploadThing` hook for more control:

```tsx
'use client'

import { useState } from 'react'
import { useUploadThing } from '@/lib/uploadthing'

export function CustomUploadForm() {
  const [files, setFiles] = useState<File[]>([])

  const { startUpload, isUploading, permittedFileInfo } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: (res) => {
        console.log("uploaded successfully!", res);
        setFiles([])
      },
      onUploadError: (error) => {
        console.error("Upload failed:", error);
      },
      onUploadProgress: (progress) => {
        console.log("Progress:", progress);
      },
    },
  );

  return (
    <div>
      <input
        type="file"
        multiple
        accept={permittedFileInfo?.config?.image?.acceptedFileTypes?.join(",")}
        onChange={(e) => {
          const selectedFiles = Array.from(e.target.files || [])
          setFiles(selectedFiles)
        }}
      />

      <button
        onClick={() => startUpload(files)}
        disabled={!files.length || isUploading}
      >
        {isUploading ? "Uploading..." : "Upload Files"}
      </button>
    </div>
  )
}
```

### 3. Custom Dropzone with React-Dropzone

For complete customization using react-dropzone:

```tsx
'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { uploadProcessedFile } from '@/lib/upload'

interface CustomDropzoneProps {
  endpoint: string
  onUploadComplete?: (files: Array<{ url: string; key: string }>) => void
  maxFiles?: number
  maxSize?: number
}

export function CustomDropzone({
  endpoint,
  onUploadComplete,
  maxFiles = 5,
  maxSize = 4 * 1024 * 1024 // 4MB
}: CustomDropzoneProps) {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [uploadedFiles, setUploadedFiles] = useState<Array<{ url: string; key: string }>>([])

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true)
    setProgress(0)

    try {
      const results = []

      for (let i = 0; i < acceptedFiles.length; i++) {
        const file = acceptedFiles[i]

        const result = await uploadProcessedFile(
          endpoint,
          file,
          (fileProgress) => {
            const overallProgress = ((i + fileProgress / 100) / acceptedFiles.length) * 100
            setProgress(overallProgress)
          }
        )

        results.push(result)
      }

      setUploadedFiles(prev => [...prev, ...results])
      onUploadComplete?.(results)
    } catch (error) {
      console.error('Upload failed:', error)
      alert('Upload failed!')
    } finally {
      setUploading(false)
      setProgress(0)
    }
  }, [endpoint, onUploadComplete])

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    maxFiles,
    maxSize,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp']
    }
  })

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed p-6 rounded-lg cursor-pointer transition-colors ${
          isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          {isDragActive ? (
            <p>Drop the files here...</p>
          ) : (
            <p>Drag & drop files here, or click to select</p>
          )}
          <p className="text-sm text-gray-500 mt-2">
            Max {maxFiles} files, {maxSize / (1024 * 1024)}MB each
          </p>
        </div>
      </div>

      {uploading && (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {fileRejections.length > 0 && (
        <div className="text-red-500 text-sm">
          {fileRejections.map(({ file, errors }) => (
            <div key={file.name}>
              {file.name}: {errors.map(e => e.message).join(', ')}
            </div>
          ))}
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {uploadedFiles.map((file, index) => (
            <img
              key={index}
              src={file.url}
              alt="Uploaded"
              className="w-full h-24 object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  )
}
```

## Advanced Patterns

### 1. Image Processing with React-Image-Crop

Combining custom dropzone with image cropping:

```tsx
'use client'

import { useState, useRef } from 'react'
import ReactCrop, { Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { uploadProcessedFile } from '@/lib/upload'

export function ImageCropUpload() {
  const [src, setSrc] = useState<string>()
  const [crop, setCrop] = useState<Crop>()
  const [originalFile, setOriginalFile] = useState<File>()
  const imgRef = useRef<HTMLImageElement>(null)

  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setOriginalFile(file)

      const reader = new FileReader()
      reader.addEventListener('load', () => setSrc(reader.result?.toString() || ''))
      reader.readAsDataURL(file)
    }
  }

  const getCroppedImg = (): Promise<Blob> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!

      if (!imgRef.current || !crop) return

      const scaleX = imgRef.current.naturalWidth / imgRef.current.width
      const scaleY = imgRef.current.naturalHeight / imgRef.current.height

      canvas.width = crop.width * scaleX
      canvas.height = crop.height * scaleY

      ctx.drawImage(
        imgRef.current,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width * scaleX,
        crop.height * scaleY
      )

      canvas.toBlob(resolve, 'image/jpeg', 0.9)
    })
  }

  const handleUpload = async () => {
    if (!crop || !originalFile) return

    try {
      const croppedBlob = await getCroppedImg()
      const croppedFile = new File(
        [croppedBlob],
        `cropped_${originalFile.name}`,
        { type: 'image/jpeg' }
      )

      const result = await uploadProcessedFile('imageUploader', croppedFile)
      console.log('Uploaded:', result)
    } catch (error) {
      console.error('Upload failed:', error)
    }
  }

  return (
    <div className="space-y-4">
      <input type="file" accept="image/*" onChange={onSelectFile} />

      {src && (
        <ReactCrop
          crop={crop}
          onChange={(c) => setCrop(c)}
          aspect={1}
        >
          <img ref={imgRef} src={src} alt="Crop preview" />
        </ReactCrop>
      )}

      <button onClick={handleUpload} disabled={!crop}>
        Upload Cropped Image
      </button>
    </div>
  )
}
```

### 2. Multiple Endpoint Upload Manager

Managing uploads to different endpoints:

```tsx
'use client'

import { useState } from 'react'
import { uploadProcessedFile } from '@/lib/upload'

interface UploadItem {
  id: string
  file: File
  endpoint: string
  status: 'pending' | 'uploading' | 'completed' | 'error'
  progress: number
  result?: { url: string; key: string }
  error?: string
}

export function MultiEndpointUploader() {
  const [uploads, setUploads] = useState<UploadItem[]>([])

  const addUpload = (file: File, endpoint: string) => {
    const newUpload: UploadItem = {
      id: Date.now().toString(),
      file,
      endpoint,
      status: 'pending',
      progress: 0
    }
    setUploads(prev => [...prev, newUpload])
  }

  const startUpload = async (id: string) => {
    const upload = uploads.find(u => u.id === id)
    if (!upload) return

    setUploads(prev => prev.map(u =>
      u.id === id ? { ...u, status: 'uploading' as const } : u
    ))

    try {
      const result = await uploadProcessedFile(
        upload.endpoint,
        upload.file,
        (progress) => {
          setUploads(prev => prev.map(u =>
            u.id === id ? { ...u, progress } : u
          ))
        }
      )

      setUploads(prev => prev.map(u =>
        u.id === id ? {
          ...u,
          status: 'completed' as const,
          result,
          progress: 100
        } : u
      ))
    } catch (error) {
      setUploads(prev => prev.map(u =>
        u.id === id ? {
          ...u,
          status: 'error' as const,
          error: error instanceof Error ? error.message : 'Upload failed'
        } : u
      ))
    }
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-4">
        <button onClick={() => {
          const input = document.createElement('input')
          input.type = 'file'
          input.accept = 'image/*'
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]
            if (file) addUpload(file, 'imageUploader')
          }
          input.click()
        }}>
          Add Image
        </button>

        <button onClick={() => {
          const input = document.createElement('input')
          input.type = 'file'
          input.accept = 'application/pdf'
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]
            if (file) addUpload(file, 'documentUploader')
          }
          input.click()
        }}>
          Add PDF
        </button>

        <button onClick={() => {
          const input = document.createElement('input')
          input.type = 'file'
          input.onchange = (e) => {
            const file = (e.target as HTMLInputElement).files?.[0]
            if (file) addUpload(file, 'fileUploader')
          }
          input.click()
        }}>
          Add File
        </button>
      </div>

      <div className="space-y-2">
        {uploads.map(upload => (
          <div key={upload.id} className="border p-4 rounded">
            <div className="flex justify-between items-center">
              <span>{upload.file.name}</span>
              <span className="text-sm text-gray-500">{upload.endpoint}</span>
            </div>

            <div className="mt-2">
              <div className="flex justify-between text-sm">
                <span>Status: {upload.status}</span>
                <span>{upload.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${upload.progress}%` }}
                />
              </div>
            </div>

            {upload.status === 'pending' && (
              <button
                onClick={() => startUpload(upload.id)}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Start Upload
              </button>
            )}

            {upload.status === 'completed' && upload.result && (
              <div className="mt-2 text-sm text-green-600">
                ✅ Uploaded: <a href={upload.result.url} target="_blank" className="underline">View</a>
              </div>
            )}

            {upload.status === 'error' && (
              <div className="mt-2 text-sm text-red-600">
                ❌ Error: {upload.error}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
```

## Troubleshooting

### Common Issues

1. **"Expected JSON content type" Error**
   ```
   Error: Expected JSON content type, got: multipart/form-data
   ```
   **Solution:** Ensure you're using the uploadthing client utilities (`uploadFiles`) instead of raw `fetch` with `FormData`.

2. **"Module not found" Errors**
   ```
   Cannot find module '@/lib/uploadthing'
   ```
   **Solution:** Check your import paths and ensure the uploadthing client is properly configured.

3. **CORS Issues**
   ```
   Access to fetch blocked by CORS policy
   ```
   **Solution:** Ensure your server CORS configuration includes your frontend URL:
   ```typescript
   app.use(cors({
     origin: [process.env.FRONTEND_URL],
     credentials: true,
   }))
   ```

4. **File Size Limits**
   ```
   File too large
   ```
   **Solution:** Check both client-side validation and server-side `maxFileSize` configuration.

5. **Authentication Issues**
   ```
   Unauthorized upload attempt
   ```
   **Solution:** Implement proper authentication in the middleware:
   ```typescript
   .middleware(async ({ req }) => {
     const user = await getUserFromRequest(req)
     if (!user) throw new Error('Unauthorized')
     return { userId: user.id }
   })
   ```

### Debugging Tips

1. **Enable Detailed Logging**
   ```typescript
   // Server-side
   .onUploadComplete(async ({ file, metadata }) => {
     console.log('Upload details:', { file, metadata })
     return { url: file.ufsUrl, key: file.key }
   })
   ```

2. **Client-side Error Handling**
   ```typescript
   try {
     const result = await uploadFiles('endpoint', { files })
     console.log('Success:', result)
   } catch (error) {
     console.error('Detailed error:', error)
     // Check error.message, error.code, etc.
   }
   ```

3. **Network Tab Inspection**
   - Check the request payload in browser dev tools
   - Verify the endpoint URL is correct
   - Look for proper authentication headers

## Best Practices

### Security
1. **Always validate file types** both client and server-side
2. **Implement authentication** in middleware when needed
3. **Use environment variables** for sensitive configuration
4. **Validate file sizes** to prevent abuse

### Performance
1. **Implement progress indicators** for better UX
2. **Use appropriate file size limits** based on your use case
3. **Consider image compression** before upload for large images
4. **Implement retry logic** for failed uploads

### User Experience
1. **Provide clear error messages** for failed uploads
2. **Show upload progress** with visual indicators
3. **Allow cancellation** of in-progress uploads
4. **Validate files before upload** to catch issues early

### Code Organization
1. **Separate upload logic** into reusable utilities
2. **Create typed interfaces** for upload responses
3. **Use consistent naming** for endpoints across client/server
4. **Implement proper error boundaries** in React components

### Example Project Structure
```
client/src/
├── lib/
│   ├── uploadthing.ts     # Client configuration
│   └── upload.ts          # Upload utilities
├── components/
│   ├── upload/
│   │   ├── simple-upload.tsx
│   │   ├── custom-dropzone.tsx
│   │   └── image-crop-upload.tsx
│   └── ui/                # UI components
└── types/
    └── upload.ts          # TypeScript types

server/
├── router/v1/
│   └── upload-thing.ts    # Upload router
├── middleware/
│   └── auth.ts           # Authentication middleware
└── utils/
    └── config.ts         # Environment configuration
```

This documentation should provide you with a comprehensive foundation for implementing UploadThing in various scenarios with Next.js and Express.js.
