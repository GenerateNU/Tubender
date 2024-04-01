export default function GetInTouch(props: { fullWidth?: boolean }) {
    return <button className={` h-16 ${props.fullWidth ? 'w-full' : 'w-48'} bg-brand-orange rounded-3xl text-lg font-semibold text-brand-white hover:text-brand-white-hover`}>Get in touch</button>
}