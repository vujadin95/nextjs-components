import dynamic from "next/dynamic";

const DynamicMap = dynamic(() => import("./map"), { ssr: false });

// dynamic(() => import("./map"), {
//   ssr: false,
// });

export default DynamicMap;
