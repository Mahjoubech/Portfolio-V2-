type SocialIconProps = {
    icon: string ; 
    href : string ; 
}

export default function SocialIcon({icon , href} : SocialIconProps){
    return (
        <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-sky-400 text-sky-500 transition hover:bg-sky-500 hover:text-white"
        >
            <i className={icon}></i>
        </a>
    )
}