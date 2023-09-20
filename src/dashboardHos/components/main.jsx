import { StatisticsChart1 } from './statisticsBars';
import AssetTest from '../../assets/images/assetProfileTest.jpg'
import SvgDoctors from './svgDoctors'
import Table from './table';
import { IoLocationOutline } from 'react-icons/io5';

const MainDash = () => {
    return (
    <section id='AboutUs' className="relative flex h-full w-full bg-gray-100 overflow-x-hidden">
        <div className='grid md:grid-cols-4 mx-[2%] py-6 gap-4 w-full h-full'>
            <div className='flex flex-col md:col-span-3 h-full w-full'>
                <div className='flex w-full h-1/4 bg-purple-700 rounded-3xl text-white overflow-hidden shadow-xl mb-2'>
                    <div className='hidden lg:flex'>
                        <SvgDoctors/>
                    </div>
                    <div className='flex flex-col items-center justify-center h-full w-full lg:w-3/4'>
                        <h1 className='text-md sm:text-xl md:text-3xl font-normal mb-2'>Welcome,<span className='font-extrabold'> Dr Rio Zencon 2023</span></h1>
                        <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight'>Have a nice day at work!</h2>
                    </div>
                </div>
                <div className='flex flex-col w-full h-1/4 bg-white rounded-3xl text-black shadow-xl mb-2 px-4 py-2 items-center'>
                    <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight mt-2'>Statistics of queries of the month</h2>
                    <StatisticsChart1/>
                </div>
                <div className='flex flex-col w-full h-auto sm:h-1/2 bg-white rounded-3xl text-black shadow-xl px-4 py-2 items-center'>
                    <div className='flex justify-between w-full h-auto px-3 my-2'>
                        <h2 className='text-xs sm:text-sm md:text-xl font-bold leading-snug tracking-tight mt-2'>Patients</h2>
                        <input type="text" className='bg-gray-200 h-full w-2/3 rounded-xl border-0 text-xs sm:text-sm md:text-base' placeholder='Search'/>
                    </div>
                    <Table/>
                </div>

            </div>
            <div className='hidden sm:flex flex-col md:col-span-1 h-full w-full'>
                <div className='flex flex-col w-full h-auto sm:h-1/3 bg-white rounded-3xl text-black shadow-xl mb-2 px-4 py-2 items-center'>
                    <div className='flex items-center justify-around w-full h-2/3'>
                        {/* <div className='h-full w-1/3'></div> */}
                        <img src={AssetTest} alt="profile" className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full object-cover' />
                        <div className='flex flex-col w-1/2 items-start'>
                            <h2 className='h-full text-base sm:text-lg md:text-xl font-bold leading-snug tracking-tight'>Dr Rio Zencon 2023</h2>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Oncologist</h2>
                            <div className='flex items-center'>
                                <IoLocationOutline size={20} color='#34A5AB'/><h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight'>Mexico City</h2>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between h-1/3 w-full'>
                        <div className='flex flex-col w-1/2 h-full items-center justify-center text-center'>
                            <h2 className='text-sm sm:text-base md:text-lg text-gray-400'>Today's Quotes</h2>
                            <h2 className='text-sm sm:text-base md:text-lg text-[#34A5AB]'>10</h2>

                        </div>
                        <div className='h-full w-[1px] bg-gray-400'></div>
                        <div className='flex flex-col w-1/2 h-full items-center justify-center text-center'>
                            <h2 className='text-sm sm:text-base md:text-lg text-gray-400'>Working Hours</h2>
                            <h2 className='text-sm sm:text-base md:text-lg text-[#34A5AB]'>9am - 3pm</h2>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-auto sm:h-1/6 bg-white rounded-3xl text-black shadow-xl mb-2 items-center'>
                    <div className='flex items-center justify-center w-full h-auto py-2 bg-[#562CB4B3] rounded-t-3xl'>
                        <h2 className='text-sm sm:text-base md:text-lg text-white'>September</h2>
                    </div>
                    <div className='flex justify-center items-center h-full w-full bg-[#562CB4] rounded-b-3xl overflow-hidden'>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>17</h2>
                            <h2>Su</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>18</h2>
                            <h2>Mo</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>19</h2>
                            <h2>Tu</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>20</h2>
                            <h2>We</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 bg-[#34A5AB] text-sm sm:text-base md:text-lg font-bold text-[#562CB4] rounded-xl'>
                            <h2>21</h2>
                            <h2>Th</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>22</h2>
                            <h2>Fr</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>23</h2>
                            <h2>Sa</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>24</h2>
                            <h2>Su</h2>
                        </div>
                        <div className='flex flex-col justify-center h-6/8 w-1/8 p-3 m-2 text-sm sm:text-base md:text-lg font-bold text-white items-center rounded-xl'>
                            <h2>25</h2>
                            <h2>Mo</h2>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col w-full h-full bg-white rounded-3xl text-black shadow-xl px-4 py-2 items-c'>
                    <div className='flex justify-between px-6 mt-2 items-center'>
                        <h2 className='text-lg sm:text-xl md:text-2xl font-bold ml-2'>Patiensts List</h2>
                        <select name="" id="" className='h-auto w-1/3 border-0 bg-transparent text-gray-400'>
                            <option value="today">Today</option>
                        </select>
                    </div>
                    <div className='flex items-center justify-between w-full h-full px-4 mb-2 overflow-hidden'>
                        <div className='flex rounded-full border-2 border-[#6DFFD6F0] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#6DFFD6F0] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>SM</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Stacy Mitchell</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Weekly Visit</h2>
                        </div>
                        <div className='flex bg-[#53CCAA] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium text-white'>8:15 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#562CB499] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#562CB499] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>AD</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Amy Dunham</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Routine Checkup</h2>
                        </div>
                        <div className='flex bg-[#562CB4] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium text-white'>8:30 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#34A5ABA8] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#34A5ABA8] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>DJ</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Demi Joan</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Report</h2>
                        </div>
                        <div className='flex bg-[#128983] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium text-white'>8:50 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#58B0E0CC] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#58B0E0CC] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>SM</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Susan Myers</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Weekly Visit</h2>
                        </div>
                        <div className='flex bg-[#53CCAA] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium text-white'>9:15 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#6DFFD6F0] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#6DFFD6F0] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>SM</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Stacy Mitchell</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Weekly Visit</h2>
                        </div>
                        <div className='flex bg-[#53CCAA] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium text-white'>9:30 AM</h2>
                        </div>
                    </div>
                    <div className='flex items-center justify-between w-full h-auto px-4 mb-2'>
                        <div className='flex rounded-full border-2 border-[#562CB499] w-20 h-20 overflow-hidden justify-center items-center'>
                            <div className='flex bg-[#562CB499] w-16 h-16 rounded-full justify-center items-center'>
                                <h2 className='text-sm sm:text-base md:text-lg font-light text-black'>AD</h2>
                            </div>
                        </div>
                        <div className='flex flex-col w-2/4 px-2 items-start'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium leading-snug tracking-tight'>Amy Dunham</h2>
                            <h2 className='text-xs sm:text-sm md:text-base leading-snug tracking-tight text-[#34A5AB]'>Routine Checkup</h2>
                        </div>
                        <div className='flex bg-[#562CB4] w-1/4 p-2 rounded-xl text-center items-center justify-center'>
                            <h2 className='text-sm sm:text-base md:text-lg font-medium text-white'>8:30 AM</h2>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    )
}

export default MainDash;