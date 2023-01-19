import { useFormikContext } from 'formik'
import React from 'react'
import { useManageShopifyPluginContext } from '../../../context/ManageShopifyPluginContext'

type Props = {}

const ShopifyPluginBrowserFrame = (props: Props) => {
    const formik = useFormikContext()
    return (
        <div className="browser-frame">
            {/* <div className="browser-frame__top flex gap-x-1.5 bg-greylight h-11 p-3 items-center">
                <div className="browser-frame__button browser-frame__button--red w-3 h-3 bg-red-600 rounded-full"></div>
                <div className="browser-frame__button browser-frame__button--yellow  w-3 h-3 bg-yellow-600 rounded-full"></div>
                <div className="browser-frame__button browser-frame__button--green  w-3 h-3 bg-green-600 rounded-full"></div>
                <div className="browser-frame__burger w-4 flex flex-col justify-evenly items-stretch h-4 flex-shrink-0 ml-auto">
                    <span className="browser-frame__burger-line h-1 bg-gray-400"></span>
                    <span className="browser-frame__burger-line h-1 bg-gray-400"></span>
                    <span className="browser-frame__burger-line h-1 bg-gray-400"></span>
                </div>
            </div>
            <div className="browser-frame__body">
                <div
                    className="p-0 w-full flex justify-center items-center"
                    style={{
                        height: "80px",
                        backgroundColor: application.bannerBgColor,
                    }}
                >
                    <p style={{ color: application.ctaTextColor }}>
                        {application.ctaText}
                    </p>
                </div>
                <div className="w-full -mt-1">
                    <span aria-live="polite" aria-busy="true">
                        <span
                            className="react-loading-skeleton"
                            style={{ height: "200px" }}
                        >
                        </span>
                        <br />
                    </span>
                    <br />
                    <div className="w-full">
                        <div
                            className="w-full p-2 grid grid-cols-3 gap-x-2 gap-y-4"
                            aria-live="polite"
                            aria-busy="true"
                        >
                            {[1, 2, 3, 4, 5, 6].map((val) => {
                                return (
                                    <span
                                        key={val.toString()}
                                        className="react-loading-skeleton"
                                        style={{ height: "200px" }}
                                    >
                                        ‌
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div> */}
            {JSON.stringify(formik.values, null, 4)}
        </div>
    )
}

export default ShopifyPluginBrowserFrame