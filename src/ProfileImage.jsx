import ProfilePic from "./assets/images/profileImg.png"
function ProfileImage() {
    return (
        <>
            <img src={ProfilePic} alt="" width="150px" height="150px"  className="imageShadow"/>
        </>
    )
}
export default ProfileImage;