function Card(props) {
    return (
        <section  className={`w-75 bg-violet-100 px-2.5 py-2.5 float-left text-xs rounded ${props.focusedSection==="ProjectSection"?"animateBorder":""}`}>
            <div className="flex gap-2.5 items-center">
                <div>
                    <img src={props.projImg} alt="" width={50} height={100} />
                </div>
                <div>
                    <h3 className="font-semibold">{props.title}</h3>
                    <h4 className="font-semibold">{props.subtitle}</h4>
                    <p>{props.description}</p>
                </div>
            </div>
            <div className="flex mt-2.5 gap-2.5">
                <div className="flex"><img src={props.imgSrc} width={10} height={10} className="mt-1 mr-1" /><span>{props.imgLabel}</span></div>
                <a href={props.viewLink} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#754add" className="size-4 float-left mr-1">
                        <path fillRule="evenodd" d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        <path fillRule="evenodd" d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
                    </svg>
                    View {props.viewLabel}
                </a>
            </div>
        </section>
    )
}
export default Card;