import Marquee from "react-fast-marquee";
export default function BreakingNews() {
  return (
    <div className="flex bg-[#F3F3F3] p-3">
      <button className="btn btn-primary rounded-l-lg rounded-none">Breaking News</button>
      <Marquee pauseOnHover={true} speed={90} className="text-black">
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
}
