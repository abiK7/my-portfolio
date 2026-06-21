function Listing({focusedSection, duration, title, subtitle, children }) {
    if(children){
    return (
        <section className={`mb-2.5 w-full float-left flex items-center bg-violet-100 rounded-md text-xs relative ${focusedSection==="workSection"?"animateBorder":""}`}>
            <div className="p-2 min-w-37.5 after:w-0.5 after:h-full after:content-[''] after:bg-violet-800 after:absolute after:top-0 after:left-36">
                <strong>{duration}</strong>
            </div>
            <div className=" p-2 ">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                {children}
            </div>
        </section>
    )
}
else{
    return (
        <section className={`mb-2.5 w-full float-left flex items-center bg-violet-100 rounded-md text-xs relative ${focusedSection==="EduSection"?"animateBorder":""}`}>
            <div className="p-2 min-w-37.5 after:w-0.5 after:h-full after:content-[''] after:bg-violet-800 after:absolute after:top-0 after:left-36">
                <strong>{duration}</strong>
            </div>
            <div className=" p-2 ">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
            </div>
        </section>
    )
}
}
export default Listing;