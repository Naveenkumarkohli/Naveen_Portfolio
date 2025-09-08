import React from 'react';

const Accounts = () => {
    const username = 'naveenkumar36'; // Your CodeChef username
    const codechefProfile = {
        username: username,
        rating: 1139,
        stars: '★',
        highestRating: 1301,
        globalRank: '97,199',
        countryRank: '91,667',
        division: 'Div 4'
    };

    return (
        <div className="flex items-center justify-center my-6 gap-4 flex-wrap">
            <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="bg-indigo-500 px-6 py-4">
                    <h2 className="text-white text-xl font-bold">CodeChef Profile</h2>
                    <p className="text-indigo-200">@{codechefProfile.username}</p>
                </div>
                <div className="p-6">
                    <div className="flex items-center mb-4">
                        <div className="text-4xl font-bold text-indigo-500">{codechefProfile.rating}</div>
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-gray-700">Rating</h3>
                            <p className="text-sm text-gray-500">Highest: <span className="font-medium text-green-500">{codechefProfile.highestRating}</span></p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="text-gray-700 text-sm font-medium">Global Rank</h4>
                            <p className="text-indigo-500 text-lg font-bold">#{codechefProfile.globalRank}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-700 text-sm font-medium">Country Rank</h4>
                            <p className="text-indigo-500 text-lg font-bold">#{codechefProfile.countryRank}</p>
                        </div>
                        <div>
                            <h4 className="text-gray-700 text-sm font-medium">Stars</h4>
                            <p className="text-yellow-500 text-lg font-bold">{codechefProfile.stars}</p>
                        </div>
                    </div>
                    <button className="mt-6 w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                        onClick={() => window.open(`https://www.codechef.com/users/${codechefProfile.username}`, '_blank')} >
                        View Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Accounts;