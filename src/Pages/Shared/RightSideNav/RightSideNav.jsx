import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaXTwitter } from "react-icons/fa6";
import qzone1 from '../../../assets/swimming.png'
import qzone2 from '../../../assets/class.png'
import qzone3 from '../../../assets/playground.png'

export default function RightSideNav() {
  return (
    <div className="fixed top-0">
      <div className="p-4 space-y-2">
        <h2 className="text-2xl">Login With</h2>
        <button className="flex text-lg items-center p-2 btn btn-outline w-full text-blue-500">
          <FaGoogle></FaGoogle>
          Google
        </button>
        <button className="flex text-lg items-center p-2 btn btn-outline w-full">
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-2xl mb-2">Find Us On</h2>
        <a href="" className="flex text-lg text-blue-600 items-center p-3 w-full rounded-t-md border ">
          <FaFacebook className="mr-2"></FaFacebook>
          Facebook
        </a>
        <a href="" className="flex text-lg items-center p-3 w-full border-x">
          <FaXTwitter className="mr-2"></FaXTwitter>
          Twitter
        </a>
        <a href="" className="flex text-lg text-purple-500 items-center p-3 w-full rounded-b-md border ">
          <FaInstagram className="mr-2"></FaInstagram>
          Instagram
        </a>
      </div>
      <div className="m-4 p-3 space-y-2 bg-[#F3F3F3] rounded-sm text-black">
      <h2 className="text-2xl mb-2">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
}
