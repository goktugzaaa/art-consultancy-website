import Script from "next/script";

const InstagramComponent = () => {
  return (
    <>
    <div className="container">
        <div className="section">
      <Script
        src="https://static.elfsight.com/platform/platform.js"
        strategy="lazyOnload"
      />
      <div
        className="elfsight-app-ec0bab25-6289-493b-af98-b7ab1d89aa3d"
        data-elfsight-app-lazy
      ></div>
      </div>
      </div>
    </>
  );
};

export default InstagramComponent;
