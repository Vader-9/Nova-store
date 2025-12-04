//import { Twitter} from "lucide-react";

function Footer() {

    return (
        <div className="w-full h-[700px] bg-blue-950 text-white pt-[10px] px-5 text-center flex flex-col mt-100   md:flex-row md:justify-between md:text-center md:h-[400px] md:w-full md:px-10 md:pt-[100px] md:mt-40  gap-5">
            <div className="text-left w-[300px] md:w-[500px]">
                <h1 className="font-bold text-2xl text-white">Nova</h1>
                <p>Online brand clothing and electronics founded in 2025 in Nigeria. Heavenly focuses on selling only quality and branded items, limited edition collections by best fashion design</p>
            </div>
            <div className="text-left w-[200px]">
                <h1>About</h1>
                <p>Information</p>
                <p>Store Locator</p>
                <p>Bulk Purchase</p>
                <p>Alternate service</p>
                <p>Gift Delivery Service</p>
                <p>Live Station</p>
            </div>
            <div className="text-left w-[200px]">
                <h1>Help</h1>
                <p>FAQ</p>
                <p>Online Shopping Guide</p>
                <p>Return poicy</p>
                <p>Privacy policy</p>
                <p>COntact us</p>
            </div>
            <div className="text-left w-[200px] hidden md:block">
                <h1>Account</h1>
                <p>Membershipe</p>
                <p>Profile</p>
                <p>Coupons</p>
            </div>
            <div className="text-left w-[200px]">
                <h1>Social media</h1>
                <p>Twitter</p>
                <p>Face Book</p>
                <p>Instagram</p>
                <p>Youtube</p>
            </div>
        </div>
    )
}

export default Footer