import GetInTouch from "./GetInTouch";

export default function MailingList() {
    return <div className=" bg-off-white bg-arrow-background bg-cover flex flex-col justify-between lg:justify-evenly items-center lg:flex-row py-32 gap-16 text-brand-blue">
        <div className=" flex flex-col gap-6 w-4/5 lg:w-1/3">
            <h1 className=" text-4xl font-semibold">Get in touch</h1>
            <p className=" text-lg">Send us a message and subscribe to our newsletter to learn more.</p>
        </div>
        <form className="flex flex-col w-4/5 sm:w-2/3 lg:w-1/3 gap-11">
            <div className="flex flex-col gap-4">
                <input type="email" placeholder="Email" className=" p-6 rounded-3xl" />
                <textarea placeholder="Send a message..." className=" h-52 align-top  p-6 rounded-3xl" />
                <div className=" flex flex-row gap-2 text-lg">
                    <input type="checkbox" className=" rounded-full" />
                    <label>Subscribe to our newsletter</label>
                </div>
            </div>
            <GetInTouch fullWidth />
        </form>
    </div>
}