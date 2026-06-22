function Tooltip({text,toolTipVisibility}){
    return(
        <div className={`toolTip ${toolTipVisibility?"block":"hidden"}`}>
           {text}
        </div>
    )
}
export default Tooltip;