export default function CustomButton(props: { fullWidth?: boolean, label: string, link: string }) {
    return <a href={props.link}><button className={` h-16 ${props.fullWidth ? 'w-full' : 'w-48'} bg-brand-blue-temp rounded-2xl text-lg font-semibold text-brand-white hover:text-brand-white-hover`}>{props.label}</button></a>
}