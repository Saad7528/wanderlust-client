import Link from 'next/link';
import React from 'react';
import { BiCheck } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiEdit2, FiMapPin, FiTrash2 } from 'react-icons/fi';
import EditeModals from '@/component/EditeModals';

const destinationDetailsPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);

    const res = await fetch(`http://localhost:5000/destination/${id}`);
    const destination = await res.json();
    console.log(destination);

    const { price, duration, country, destinationName, imageUrl, _id } = destination;

    return (
        <div>
            <div className="min-h-screen bg-white text-gray-800 font-sans pb-12">
                {/* Container */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">

                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                        <Link href='/destinations'>
                            <button className="flex items-center text-gray-500 hover:text-gray-800 transition mb-4 sm:mb-0">
                                <FiArrowLeft className="mr-2" />
                                <span>Back to Destinations</span>
                            </button>
                        </Link>

                        <div className="flex items-center gap-3">
                            <EditeModals destination={destination} />
                            <button className="flex items-center gap-2 px-4 py-2 border border-red-200 text-red-500 rounded-md hover:bg-red-50 transition">
                                <FiTrash2 size={14} />
                                <span className="text-sm font-medium">Cancel</span>
                            </button>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden mb-8">
                        <img
                            src={imageUrl}
                            alt={destinationName}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Main Content & Sidebar Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* Left Column - Details */}
                        <div className="lg:col-span-2">
                            {/* Title Area */}
                            <div className="mb-8">
                                <div className="flex items-center text-gray-500 text-sm mb-2">
                                    <FiMapPin className="mr-1" />
                                    <span>{country}</span>
                                </div>
                                <h1 className="text-4xl font-light mb-4">{destinationName}</h1>

                                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-800">
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-green-600" />
                                        <span>4.9 <span className="text-gray-500 font-normal">(234 reviews)</span></span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FiCalendar className="text-gray-600" />
                                        <span>{duration}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Overview */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-medium mb-3">Overview</h2>
                                <p className="text-gray-500 leading-relaxed">
                                    Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
                                </p>
                            </div>

                            {/* Highlights */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-medium mb-3">Highlights</h2>
                                <p className="text-gray-500 leading-relaxed mb-4">
                                    Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                                    {[
                                        "Luxury beachfront accommodation",
                                        "Visit Uluwatu Temple at sunset",
                                        "Traditional Balinese spa treatment",
                                        "Private beach dinner experience",
                                        "Sunrise trek to Mount Batur"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start gap-2">
                                            <BiCheck className="text-green-500 mt-1 flex-shrink-0" size={20} />
                                            <span className="text-gray-500 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="border border-gray-100 shadow-sm rounded-xl p-6 bg-white sticky top-6">
                                <p className="text-gray-500 text-sm mb-1">Starting from</p>
                                <div className="mb-1">
                                    <span className="text-4xl font-bold text-[#1CA4C0]">${price}</span>
                                </div>
                                <p className="text-gray-500 text-sm mb-6">per person</p>

                                <div className="mb-4">
                                    <input
                                        type="date"
                                        defaultValue="2026-05-15"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-md text-gray-700 outline-none focus:border-[#1CA4C0] transition"
                                    />
                                </div>

                                <button className="w-full bg-[#1CA4C0] hover:bg-[#158fa8] text-white py-3 rounded-md font-medium flex justify-center items-center gap-2 transition mb-6">
                                    Book Now <FiArrowRight />
                                </button>

                                <div className="space-y-3">
                                    {[
                                        "Free cancellation up to 7 days",
                                        "Travel insurance included",
                                        "24/7 customer support"
                                    ].map((perk, index) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <BiCheck className="text-green-500 flex-shrink-0" size={18} />
                                            <span className="text-gray-500 text-sm">{perk}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default destinationDetailsPage;