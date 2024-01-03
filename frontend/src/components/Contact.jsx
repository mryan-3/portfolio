import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form action="https://getform.io/f/454571a0-52cb-4329-8ba6-df7047e4db65" method="POST" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">Submit the form below or shoot me an email - malawaryan@gmail.com</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name"/>
                 <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email"/>
                <textarea className="bg-[#ccd6f6] p-2" name="messsage" rows={10} placeholder="Message"/>
                <button className="text-white border-2 hover:bg-pink-300 px-4 py-3 mx-auto my-8 flex items-center">Let's Chat</button>
            </form>
        </div>
    )
}

export default Contact
