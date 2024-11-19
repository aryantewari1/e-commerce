import useHomePageData from "../utils/hooks/useHomePageData";

const Homepage = () => {
  const products = useHomePageData();
  console.log(products);
  return (
    <div>
      <div>
        <img
          src="https://img.notionusercontent.com/s3/prod-files-secure%2Feeee8099-a731-4be4-b949-97588572fb6b%2Faf556a00-6601-4a15-8931-dab16ebd5981%2FUntitled.png/size/w=2000?exp=1732135918&sig=2bfmRqghdjSyBQRbyKHDcSRSdwsXfK8QPHfxSwoLxiM"
          className="h-[10rem] object-cover tabletsm:h-full"
        />
      </div>
    </div>
  );
};

export default Homepage;
