import Image from 'next/image';
import Link from 'next/link';
// React Icons থেকে প্রয়োজনীয় আইকনগুলো ইমপোর্ট করা হলো
import { FaStar } from 'react-icons/fa';
import { HiOutlineLocationMarker, HiOutlineCalendar } from 'react-icons/hi';
import { FiArrowUpRight } from 'react-icons/fi';

const Destinations = ({ des }) => {
    const { price, duration, country, destinationName, imageUrl } = des;
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-[380px] shadow-sm hover:shadow-md transition-shadow duration-300 rounded-none overflow-hidden font-sans">

                {/* Image Section */}
                <figure className="relative h-64 w-full m-0">
                    <Image
                        src={imageUrl}
                        alt={destinationName}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 380px"
                        priority
                    />

                    {/* Rating Badge */}
                    <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm px-3 py-1 rounded-sm flex items-center gap-1 shadow-sm">
                        <span className="font-semibold text-gray-900 text-sm">4.5</span>
                        <FaStar className="w-4 h-4 text-black" />
                    </div>
                </figure>

                {/* Content Section */}
                <div className="card-body p-4 pb-6">

                    {/* Location Info */}
                    <div className="flex items-center gap-1 text-gray-500 mb-1">
                        <HiOutlineLocationMarker className="w-5 h-5" />
                        <span className="text-sm font-medium">{country}</span>
                    </div>

                    {/* Title and Price */}
                    <div className="flex justify-between items-baseline mb-2">
                        <h2 className="text-2xl font-serif text-gray-900 tracking-tight">{destinationName}</h2>
                        <div className="text-right">
                            <span className="text-2xl font-serif font-medium text-gray-900">{price}</span>
                            <span className="text-sm text-gray-500 font-medium">/Person</span>
                        </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 text-gray-500 mb-5">
                        <HiOutlineCalendar className="w-5 h-5" />
                        <span className="text-sm font-medium">{duration}</span>
                    </div>

                    {/* Action Button */}
                    <div className="card-actions justify-start">
                        <Link href="#" className="group flex items-center gap-1 text-[#38bdf8] font-semibold text-sm hover:text-[#0ea5e9] transition-colors uppercase tracking-wide">
                            BOOK NOW
                            <FiArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform stroke-[2.5]" />
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    );

};

export default Destinations;