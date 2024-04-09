import GetInTouch from "./GetInTouch";

export default function MailingList() {
    return <div className=" bg-off-white bg-arrow-background bg-cover flex flex-col justify-between lg:justify-evenly lg:flex-row py-32 gap-16 text-brand-blue">
        <div className=" flex flex-col gap-6 w-4/5 lg:w-1/3">
            <h1 className=" text-5xl font-semibold text-brand-blue">Get in touch</h1>
            <h2 className=" text-3xl font-semibold text-brand-blue">Interested in our product? </h2>
            <p className=" text-xl font-medium text-brand-blue-light">Get in touch with us to receive a quote or to learn more.</p>
        </div>
        <form className="flex flex-col w-4/5 sm:w-2/3 lg:w-1/3 gap-5">
            <div className="flex flex-col gap-4">
                <div className=" grid grid-cols-2 gap-5">
                    <input type="text" placeholder="First Name" className=" p-6 rounded-3xl" />
                    <input type="text" placeholder="Last Name" className=" p-6 rounded-3xl" />
                    <input type="email" placeholder="Business Email" className=" p-6 rounded-3xl" />
                    <input type="text" placeholder="Phone Number" className=" p-6 rounded-3xl" />
                </div>
                <textarea placeholder="Send a message..." className=" h-52 align-top  p-6 rounded-3xl" />
            </div>
            <GetInTouch fullWidth label="Submit" link="" />
        </form>
    </div>
}