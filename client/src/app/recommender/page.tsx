import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title: "Recommender Page",
  description:
    "This is the recommneder page of the TailAdmin - Next.js Dashboard Template",
};

const RecommenderPage = () => {
    return (
        <DefaultLayout>
            <form>
                <div className="border-2 border-gray-300 rounded-lg mb-4 grid grid-cols-3 gap-4 p-2">
                    <div>
                        <label htmlFor="sector_select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Market Sector</label>
                        <select id="sector_select" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Select a sector</option>
                            <option value="technology">Technology</option>
                            <option value="healthcare">Healthcare</option>
                            <option value="financials">Financials</option>
                            <option value="consumer_goods">Consumer Goods</option>
                            <option value="energy">Energy</option>
                            <option value="utilities">Utilities</option>
                            <option value="real_estate">Real Estate</option>
                            <option value="industrials">Industrials</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Risk Tolerance</label>
                        <div className="grid grid-cols-3">
                            <div className="flex items-center">
                                <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-1" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Low</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Medium</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio-3" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                <label htmlFor="default-radio-3" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">High</label>
                            </div>
                        </div >
                    </div>
                    <div>
                        <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expected Returns</label>
                        <input id="default-range" type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
                    </div>
                </div>
            </form>

            {/* cards to display yahoo finance api */}
            <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Example instrument 1</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae hic assumenda sed optio fugiat adipisci saepe odio nisi, a totam corrupti quae cumque, maxime nemo ipsum quo inventore dolores veniam?.</p>
            </a>

        </DefaultLayout>
    );
};

export default RecommenderPage;