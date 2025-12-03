import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="space-y-8">
        {/* Carousel / Banners */}
        <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-4 snap-x snap-mandatory">
            <div className="flex items-stretch gap-6">
                <BannerCard 
                    title="New Slot Machine: Aztec Gold"
                    description="Uncover ancient riches in our latest slot adventure."
                    buttonText="Play Now"
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuA_L7yC0SiGB7w0a3WCqbc6Dqr7-NKA8XPzb90sAij4GsN9U3SMkkTyYmjPbGJRuEJ-di9BtjvlL0mNK5NEvjHXJ2vEbjk3F-dbwfGBinJJTiQlicmst7Y0IsIBQgQdEb_flyQ7J-JAhOAwd0Lykto5W49rVZbLrsrr9yOIdoHspDeW68X6rx0fTY2efIsx_KAftVu0ivrs-hqD1DqDueWgJOciR2UcVD_GQ5f1vFA6PAOtoUXRlTxHzAkLGAjtb6qghed71Gpb5gwF"
                    onClick={() => navigate('/play/aztec-gold')}
                />
                 <BannerCard 
                    title="Live Blackjack Tournament"
                    description="Join the high-stakes action and win big."
                    buttonText="Join Now"
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuABc2vclQlXWGNWT5t-5vZ83yGAIO3GclqNfkwE73p0uoBCDsDLqghpo8C0pffhAFz0vIonumOEkehqbkOxHgPGk8_62KZWJ1t5XQcaQU76EdRg5icsMHYLHzgQ1bb-6p2WMV4sgQgd5Z3Uh4ehkSHYaidEKYTwpkUk1IV8z5jxrLAjOheXHRXEMzz-M3b3jSSZOWwE3dwaKR4-rwnG_70syJIDz45krm7QbRuJtCRhBuKKPdmF-OWG8WH4Koih9HAX__s_c8zIXAWO"
                />
                 <BannerCard 
                    title="Welcome Bonus Offer"
                    description="Get a 100% match on your first deposit."
                    buttonText="Claim Bonus"
                    imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDurae58fGUTGpK-dL0m1WsnHujOOtHLieNYkNPeaE1yd7uXl0xcSwRuyCBwSiG8EKIOKBrFRMIjOR8YUQiWX5MYRx9GkAKx1AGi-c3NhFXVzWOPVwFU_MrUZR3rVZpFX4-bxhXznBrJrk7HeI3VuN_BH9BcRCPDMApU1oLIISKdq4XLHRG_g9mWL87-5Q3K7epuQy9anj2Tl8PQ3VbD6wNNiGiYzZ4gbCEu1JR0JMnxSevDc4NAqPh8CVCbNUqhWfo7E7wrY75bz1y"
                />
            </div>
        </div>

        {/* Game Categories */}
        <div>
            <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3">Game Categories</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <CategoryCard icon="playing_cards" label="Poker" onClick={() => navigate('/games?category=poker')} />
                <CategoryCard icon="casino" label="Slots" onClick={() => navigate('/games?category=slots')} />
                <CategoryCard icon="style" label="Blackjack" onClick={() => navigate('/games?category=blackjack')} />
                <CategoryCard icon="casino" label="Roulette" onClick={() => navigate('/games?category=roulette')} />
            </div>
        </div>

        {/* Featured Games */}
        <div>
             <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-4">Featured Games</h2>
             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <GameThumbnail title="Cosmic Quest" image="https://lh3.googleusercontent.com/aida-public/AB6AXuChPuP3_0TDDiBcc7XfVsCYcUlxHpDkZKi_qxLyf9MnSmlKK4HNuxGQm73hWMQtyrcSy5nrpauxNhy6me_Lvd8lwDldScb3LqAlXTN60mmcbpFekIGt0ePLdTLjBmRTTo25O6TXH1B782jZc1UxXLvM-p2nn6l1yaCEatnOam0kuK8xZvBkkBb6zfNd6kkjTye75eHq64013dJF96u-OiXCMZvTypgnH_jTqoQn_O-i8OX55-H9enKKUr_DYNwNos8oQEg9Gg0nYytL" />
                <GameThumbnail title="Ocean's Fortune" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCCr_sRh5YLiLNFzR0AC51-_6Xl-M_5DF0lpjuFn7pfFu3-WN3St_tPGxnCvqD7r47RQSegmtKZpwCmMz8snnE-EciXTrHPA9Neb61FVS7311wumwKQHDW50Xwc7OQlKG-bTnbvA5ledbYNTc0xztww7Jt094v2S8i4Vg2fRe1kSEJnVjJcBuwbxzwX-v9LfNGiHCcafMWN5NJXzCYzEPjyAd5T84pU2w4gS627T72Zrc-dc5sKAer49LUKZNOlvkUllLYLgepuGA57" />
                <GameThumbnail title="Jungle Gems" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkQpqaIUjeMmImVPK3V4b3mUc3e5Oa4yFJ1TOw3mHQ1PhtBTAP98ymj-P0L8ERFQt5x5a53WzCjATzXkxil16_tST-W88AHb1z6QS9bHh1zKxRahP0lybdguGmsE-dLu7udHNo_YiUqMraQ8aa1NuHxBrf3xNqQIiqdCR8UUKymNIqFME6VmrMV7HqFSygHl6FDHhPk27oW4nJ4Hij19ZY0NgyI8NSimQVtR5hieev5PmUlykE0RrlcnUfqseUwDjznuolW7t5B-ki" />
                <GameThumbnail title="Vegas Nights" image="https://lh3.googleusercontent.com/aida-public/AB6AXuD5QD9oKkJ8L3KPVI54UTFnUP7MXYTlblTTkLZBYE-YYVmWW_-A5vzewsbMt18Hj0h1l7sQUWPoIA2ARp8yX-3tsZ7Rj37YEa1-ZQPJERyq_7GLbm6WDom6V5wmBGtUi4yQ8DB9twHk_rOFSg2uMlVPeb7UQxrKU40Q0Ijk6gqGD2SN6N2RYnZ0GkKb3Hw7PNEpUMH_byT28sVGE315rU6Y3sqHnwupqI7zL_1GKa1SKoL6NgxIfGQCfTNs8Dzpz8w_uZvFiCurRwL3" />
                <GameThumbnail title="Pirate's Gold" image="https://lh3.googleusercontent.com/aida-public/AB6AXuA53jm-TkDcfJ5ptWoXvMinxjnoXNXqfc-CgSaRGEzKehWiCV3jSI3fbpUE8V6leskpSWYEb798YMOa3sTOpP86ZL-b4Uklpht66GueF8Npeoqzf_9evJyUVQ7tBFN-82ixgBG7Z6Nyi8lxdYNrmfhUInVgVy4U-7TeIYLab7kdj7VjaPXdtkwfio-P7BcWx18_cr5Ne5ESrlUIZU16wY3Llcv6OPhS-GMilQpNn_BjA9unhgR5YapGthgt9q27PEjmX6RPzrxOqPlZ" />
             </div>
        </div>
    </div>
  );
};

const BannerCard: React.FC<{title: string; description: string; buttonText: string; imageUrl: string; onClick?: () => void}> = ({ title, description, buttonText, imageUrl, onClick }) => (
    <div className="flex h-full flex-1 flex-col gap-4 rounded-lg bg-white dark:bg-white/5 shadow-md dark:shadow-[0_0_4px_rgba(0,0,0,0.1)] min-w-[85vw] md:min-w-[28rem] relative overflow-hidden snap-center group cursor-pointer" onClick={onClick}>
        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover flex flex-col transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url("${imageUrl}")` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
            <p className="text-white text-xl font-bold leading-normal">{title}</p>
            <p className="text-gray-300 text-sm font-normal leading-normal mb-4">{description}</p>
            <button className="flex min-w-[84px] max-w-[120px] items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
                <span className="truncate">{buttonText}</span>
            </button>
        </div>
    </div>
);

const CategoryCard: React.FC<{icon: string; label: string; onClick?: () => void}> = ({ icon, label, onClick }) => (
    <div 
        onClick={onClick}
        className="flex flex-col justify-between p-6 rounded-lg bg-white dark:bg-white/5 hover:bg-gray-50 dark:hover:bg-white/10 transition-all cursor-pointer border border-black/5 dark:border-transparent hover:-translate-y-1 shadow-sm"
    >
        <span className="material-symbols-outlined text-primary text-4xl mb-4">{icon}</span>
        <p className="text-slate-900 dark:text-white text-lg font-semibold">{label}</p>
    </div>
);

const GameThumbnail: React.FC<{title: string; image: string}> = ({ title, image }) => {
    const navigate = useNavigate();
    return (
        <div className="group relative flex flex-col rounded-lg bg-white dark:bg-white/5 shadow-md overflow-hidden transition-all hover:-translate-y-1 cursor-pointer" onClick={() => navigate('/game/1')}>
            <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover" style={{ backgroundImage: `url("${image}")` }}></div>
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <button className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-full h-11 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] gap-2 shadow-xl shadow-primary/40 transform scale-90 group-hover:scale-100 transition-transform">
                    <span className="material-symbols-outlined">play_arrow</span>
                    <span className="truncate">Play</span>
                </button>
            </div>
            <div className="p-4 border-t border-black/5 dark:border-white/5">
                <p className="text-slate-900 dark:text-white text-base font-medium leading-normal truncate">{title}</p>
            </div>
        </div>
    );
};

export default Dashboard;