"use client";
import { useState } from "react";
import "../../../app/globals.css";

const BookShipmentForm = () => {
  const [formData, setFormData] = useState({
    weight: "",
    pincode: "",
  });

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    console.log("Form data: " + JSON.stringify(formData));
  };

  return (
    <div className="absolute right-[5%]  bg-black   bottom-0 h-[430px] w-[469.49px] rounded-lg rounded-b-none font-manrope">
      <h2 className="text-white font-sans text-2xl font-semibold mb-2 mt-10 text-center">
        Pan India Transportation Service
      </h2>
      <p className="text-gray-300 font-sans mb-4 text-center">
        Pan India transportation with guaranteed <br />
        on-time delivery
      </p>
      <form method="POST" onSubmit={formSubmissionHandler}>
        <div className="mb-4 relative px-[5%] md:px-11 mt-10">
          <input
            type="text"
            placeholder="Weight"
            value={formData.weight}
            onChange={(e) => {
              setFormData({ ...formData, weight: e.target.value });
            }}
            className="w-full bg-white py-2 px-5 rounded-md pr-8 placeholder:text-primary focus:outline-none"
          />
          <span className="absolute right-16 top-1/2 transform -translate-y-1/2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2_39)">
                <path
                  d="M6.58914 5.02903C6.10062 3.10888 6.35894 2.04114 7.48574 1.26231C7.95473 0.935128 8.50949 0.767383 9.07373 0.782147C9.63796 0.796912 10.1839 0.993459 10.6366 1.34476C11.6829 2.16243 11.9341 3.35418 11.3978 5.02903C12.0479 5.02903 12.6855 5.02903 13.3225 5.02903C14.1013 5.02903 14.5474 5.35406 14.7919 6.11926C15.8383 9.38175 16.8812 12.6454 17.9206 15.9101C18.2292 16.8811 17.6086 17.7799 16.6309 17.7806C11.5482 17.7837 6.46575 17.7837 1.3835 17.7806C0.385532 17.7806 -0.232475 16.8859 0.0827411 15.8938C1.12082 12.6281 2.16347 9.36426 3.2107 6.10222C3.44875 5.36019 3.90326 5.03312 4.65991 5.03108C5.30015 5.02903 5.9417 5.02903 6.58914 5.02903ZM10.3515 3.60561C10.3552 3.41699 10.3225 3.22951 10.2554 3.05428C10.1883 2.87905 10.0881 2.71963 9.96084 2.58547C9.83353 2.45132 9.68167 2.34515 9.51426 2.27326C9.34685 2.20137 9.1673 2.16522 8.98623 2.16695C8.80517 2.16868 8.62628 2.20827 8.46017 2.28335C8.29406 2.35843 8.1441 2.46749 8.01918 2.60406C7.89426 2.74063 7.79692 2.90194 7.73292 3.07843C7.66892 3.25491 7.63957 3.44298 7.64662 3.6315C7.64502 3.81597 7.67889 3.9989 7.74622 4.16951C7.81355 4.34012 7.91299 4.49495 8.03867 4.62488C8.16435 4.75481 8.31372 4.85721 8.47799 4.92604C8.64225 4.99487 8.81809 5.02873 8.99511 5.02563C9.76942 5.02903 10.3528 4.41578 10.3515 3.60425V3.60561Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_39">
                  <rect
                    width="18"
                    height="17"
                    fill="white"
                    transform="translate(0 0.779541)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </div>
        <div className="mb-4 relative px-[5%] md:px-11">
          <input
            type="text"
            placeholder="Pickup Pincode"
            value={formData.pincode}
            onChange={(e) => {
              setFormData({ ...formData, pincode: e.target.value });
            }}
            className="w-full bg-white py-2 px-5 rounded-md pr-8 placeholder:text-primary focus:outline-none"
          />
          <span className="absolute right-16 top-1/2 transform -translate-y-1/2">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="18" height="18" fill="url(#pattern0_180_12)" />
              <defs>
                <pattern
                  id="pattern0_180_12"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_180_12"
                    transform="scale(0.0416667)"
                  />
                </pattern>
                <image
                  id="image0_180_12"
                  width="24"
                  height="24"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAESSURBVEiJ1dMhSwNhGAfw3xQUFsTgULBosIpJGBhUbLKvYPED2E2CwSwIChYxWbQYDDarCBbBrGDQoBiVOcPu4Nxut918D/QPD9xz8P6e972X479nMLA3g21M4zokXMUZ6mhgLwRaQg2XERpXXfMkfWcIa7hrgeM67RcewQYeO8BxVfPCE9jCaxe4gas88CyO8dEDHFetF3gB5/jKATdwj4EseAk3OdFkrXfb+cEv8CcMp6Gllr6MiubFjkXPFYxH/QomU5xN7HQ7QS850r77d4x2WpB5KSl5SXl3iLeiBnxiN2tB3gHPLf0JHnIamVn18/vPhcRhPoFfhMZhKjFguYgB5Qi/1f4PBcs+FovC/16+AcOKdwiLaSxcAAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
          </span>
        </div>
        <div className="px-[5%] md:px-11 pb-12">
          <input
            type="submit"
            value="Book Shipment"
            className="w-full cursor-pointer bg-themeRed text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
          />
        </div>
      </form>
    </div>
  );
};
export default BookShipmentForm;
