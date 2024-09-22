export const Experience = () => {
  return (
    <div className='font-titillium text-white max-w-xl mx-auto p-4 mb-4'>
      <h2 className='text-4xl font-bold'>Experience</h2>
      <div className='flex flex-col gap-2 mt-4'>
        <h4 className='font-semibold text-2xl'>
          Zenetra Labs - Software Engineer
        </h4>
        <p>Nov 2023 - Present</p>
        <p className='font-semibold text-xl'> Roles and Responsibilities: </p>
        <div className='px-4'>
          <ul className='list-disc'>
            <li>
              Engineered dynamic and responsive web applications using React.js,
              Next.js, and Tailwind CSS for frontend and technologies like Node,
              Express, Nestjs, Python and Golang for the backend. Implemented
              Large Language Models (LLM) and Machine Learning models.
            </li>
            <li>
              Architected and maintained both relational (PostgreSQL, MySQL) and
              non-relational (MongoDB) databases.
            </li>
            <li>
              Created API documentation using OpenAPI Specification to ensure
              clarity and ease of use for other developers.
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <h4 className='font-semibold text-2xl'>
          JHUB Africa - Software Engineer(Apprentice)
        </h4>
        <p>May 2024 - August 2024</p>
        <p className='font-semibold text-xl'> Roles and Responsibilities: </p>
        <div className='px-4'>
          <ul className='list-disc'>
            <li>
              Collaborated with team members to design and develop innovative
              solutions.
            </li>
            <li>
              Developed RESTful APIs to facilitate efficient data exchange
              between front-end and back-end systems.
            </li>
            <li>
              Created API documentation to ensure clarity and ease of use for
              other developers.
            </li>
          </ul>
        </div>
      </div>

      <div className='flex flex-col gap-2 mt-4'>
        <h4 className='font-semibold text-2xl'>HNG Tech - Backend Developer</h4>
        <p>July 2023 - March 2024</p>
        <p className='font-semibold text-xl'> Roles and Responsibilities: </p>
        <div className='px-4'>
          <ul className='list-disc'>
            <li>
              Developed RESTful APIs to support front-end applications and
              ensure seamless data communication.{' '}
            </li>
            <li>
              Implemented authentication and authorization mechanisms to secure
              endpoints.
            </li>
            <li>
              Worked closely with other engineers to learn and apply best
              practices in software development
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
