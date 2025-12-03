import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-col gap-1">
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">Tragamonedas</h1>
                <p className="text-base text-gray-500 dark:text-gray-400">Explora nuestra colección de +500 juegos</p>
            </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center mb-8">
            <div className="flex-grow">
                <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-gray-500 dark:text-gray-400">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input 
                        className="form-input h-12 w-full min-w-0 flex-1 resize-none overflow-hidden rounded-full border-gray-200 bg-white pl-12 text-base text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-primary dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-gray-400 shadow-sm" 
                        placeholder="Buscar juego..." 
                    />
                </div>
            </div>
            <div className="flex flex-shrink-0 gap-3 overflow-x-auto pb-2 md:pb-0">
                <FilterChip label="Proveedor" />
                <FilterChip label="Categoría" />
                <FilterChip label="Ordenar por" />
            </div>
        </div>

        {/* Game Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            <GameCard title="Book of Ancients" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCx5NLnQ56jfyV2RJZxbxI4F1p5x9Seg5R8ME2tuixo4FtrUY13KsbEE5vJh9U5K4BpU_wUft-GxW7CG-ZHqk055KZV4bkNQkM5hLNKgAzIP6N8DMiBdeE79d_kXpBJJcZA0fvhDkVgGtn9s3Lj1IzEi_rz4nGdRGIXTrLaxv4KDZ07zs_ONe1pzkBgd-iaDf0FkOh1Djgn8y6t6TP7hgRFPUaX0VMb59eL_ktEICwNLKf54b2P-HR3lLY_4ciqrLGJ7MaO-_7nXOzk" />
            <GameCard title="Galaxy Gems" image="https://lh3.googleusercontent.com/aida-public/AB6AXuAGci69eT3UdE6snFbgDn20F1OJKuwqyvkMXmVMNB1y3Jsn3eqmdPK3mADyfbN6ecJnyMefW2O9HixF9OMWr1o3dC7OypGKWBeEv6o5hj5nAJ-GqMde7Gs-Rr8_mR_nrIuAli6hqQFbHvK0LqrLlAQph9VCqgDcqGSSFe2ckQtB_fuOUuDwq235zTEJx_kx45V_y_BD7_JKnF2J7v0tSfc7Q9Hicrwa41ZjKmdqg3OJgUewK3IL41gqq78M2USDLYo6-bq6vqNv7YhD" />
            <GameCard title="Jungle Treasures" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBH8hLQW6aLgjY1m79qJatK1Sc-WDMKYWV-TPeGqcQhxFEMCoYbM4WGFSdeNUl1xGMPOWtpu8nkA4wd3c_bS0aHuIBuz3-DEGbjvv0z2-krn2d0mFFoyT3q_5-vDdaJq4opFryOYI4CUEHM6mZOSC6TuDHQwIcC6uLCEeVx5ecbQoDqbw3exOFL7DDBfELaZu9R8O9QIAGjQMl-x-Nuy7lD6eNYkLM69MH_ABfmERx5hOtgE7miilD3Dd_0As7oyLua6sdSAeOON5UJ" />
            <GameCard title="Vegas Nights" image="https://lh3.googleusercontent.com/aida-public/AB6AXuD9z--w78LcD6Ng-8pmwuXFsCSljnfPxR1chFbaeXrlTFciqKtuaFiW6_a0BK1CP3-7qzAMjnyVVBH9pOl4LnXjbqnjeT17NHDTunnt7wBm344ErXVwx2vTHkZRZjVM-AEVix-hQvu9t8mPV3HmWGePekf0In9BmgT9u85MrG-oyERoqbgsLW2A7vSLbEZmYoKQIC1VKrLlDF4WOyhts_r67IzJAVnr1j-uo3Yzq9G0x5K56VXsz2fTmOA0-OiDjHi5W1x2RLb_Czdx" />
            <GameCard title="Pirate's Gold" image="https://lh3.googleusercontent.com/aida-public/AB6AXuDYIuAkkaPC4BdGOPEfM5yPjRPlz7HTTe1PPD6-h1ZOXFKcqEYHir0rbvgojdKu28RWoakfWGzEdHIC1Hn8PKgo99kKkqOuMtg-yU141RT1TTEJC53Pte4DwscWmJ5Z7AQCJnO2lshewcICbIuWavuIwy3YooGoA7RmmxiExTL6OhmLTzf89VYVqV-MEa9Yu4Zg13Siv6zW1_VSrhbgthWPSYsOIxCOLmTHxZDGDRGWPonzTVidKwEOnhAB3pmJw0Zl9U2oWKXf_BXI" />
            <GameCard title="Wolf Spirit" image="https://lh3.googleusercontent.com/aida-public/AB6AXuD5PadJ21Y_SNz0GVYR-nvULQyBhZvaWjaev6xCR9ilA-xsiIphAzdmilMQM9hqQnfVk8Z-B63z6ut9w-fG_92FrnB30672Gvs2lMeIxNTKCZkzN0J7-7f4xuHp8FOtLsmPu3Vpq28PM7CR00a75L6_0-uNyCa-0G4R1n9t2ow87i4PmjacO4brIr32vNfje0vQmGrhLm7cdWxWLgnAp8Ov2giasiY3Ck6fHl5JP8tcea0xTQsCgncpaJ6lDUttJnLALSnL1EnVLtUW" />
            <GameCard title="Mega Fruits" image="https://lh3.googleusercontent.com/aida-public/AB6AXuBm8qf-HTjjjubrEO5JeJ-FYriBx-35nweLzZMiCKUplP5KhlbYR_RY2GFrbkx2orCj4PuHkGwejIvBi5G_OXwKLHP9Bj2XqFaeo44xb1dP6BnEHVQz8c0iQAWJB5pUQ4ZHlBwuJFCx_uU1nZWDHu_sIEpA7G3qcJ7QeWkTD3gGTIwb1Pk5ivdoI91TRWTY5LW5ya1kKlQNm3CNBnX31k_GV1DHPOc0LDV-tHXEZVm3dADUiryHsTfIuY_CnPTXipeGBM8mzmtXAFhb" />
            <GameCard title="Lost City" image="https://lh3.googleusercontent.com/aida-public/AB6AXuDRM1ihdGcBZC9DC-Nea_S4jOQrtJd43uHzHc1EibWlilhkHq0FhLoHjxqNskudPitgkoYEnsgkOIBkzZ5kHX3mw678C12lUA3LiTVfI_WyFkCvHA1Q15ELUWZW9meLxDTvqvLbFv4wtrPchJQNVqdNF-5i6ZZ0CdEiFdK7XnRxOhzF3FACB0_s5ZWu8ahiRhosrDmB4iLSUHGl0ns4v3aOJVDF8AkhEmHzefh1kdAjsEmvqXxPu_b9WCavBwMWMCKhNfzshjeC1J9p" />
            <GameCard title="Dragon's Fortune" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCkFvc6g2ZsCONGTq9bv_U_IfdODnbcMcfrnUzauIeHuWvuh0oCn1iM8zR0k25e0R6_deHIri4ETyXAjHnKEJJf0jbG6kPdTxtsAqHtKULdPDOAmSaZKsZ7yqfI2Ex8URiegPDYpZSn6PC_VdHEunji_CZyPg3QiIJLYS5nP3s36zyLNq_w67jFaP3zuv3Go8hr7D8PkUDKQ7ebpyrwQ_tNrSu1Ln18V_67XJnpo6hel_Y6NffDJlRUtnckT8dUNp2CNhZnNsWDOnla" />
            <GameCard title="Wizard's Riches" image="https://lh3.googleusercontent.com/aida-public/AB6AXuCNn-UxMXHllkiOg70e5inGP9mukKZ7DtvW1F-DbNr1VuSuYlnCiS2513P-nFndXtR-jtuwHZOWLmfi727vY6hvdpIYYoglllGPZtYPvZ4vtTzrkcOKpT_webz8kDZE2NG9UrKlU0uYQ2dZvBGb42hqS-n5CH09btVIfQ83f9zf2jNAMIlts_dIyVWcfqZc2xsIKYfo1G00Afx9Yb_BmlotpQdpqniwIOVjSihfaRpKhrXFWOAqi-JGAmwIzFrchN6C_Qwr6ALKQ-em" />
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center pb-8">
            <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-6 border-2 border-primary text-primary text-sm font-bold tracking-wide transition-colors hover:bg-primary hover:text-white">
                <span className="truncate">Cargar más juegos</span>
            </button>
        </div>
    </div>
  );
};

const FilterChip: React.FC<{label: string}> = ({ label }) => (
    <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-white/5 px-4 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-transparent transition-colors">
        <p className="text-sm font-medium text-slate-700 dark:text-gray-300">{label}</p>
        <span className="material-symbols-outlined !text-xl text-gray-500 dark:text-gray-400">expand_more</span>
    </button>
);

const GameCard: React.FC<{title: string; image: string}> = ({ title, image }) => {
    const navigate = useNavigate();
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer bg-black" onClick={() => navigate('/game/1')}>
            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" src={image} alt={title} loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/60 backdrop-blur-[2px]">
                <h3 className="text-lg font-bold text-white text-center mb-3 drop-shadow-md">{title}</h3>
                <button className="flex min-w-[84px] items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold tracking-wide shadow-lg shadow-primary/40 transition-transform hover:scale-105">
                    <span className="truncate">JUGAR</span>
                </button>
            </div>
            
            {/* Default Content */}
            <div className="absolute bottom-0 left-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                <h3 className="font-bold text-white text-sm md:text-base drop-shadow-md">{title}</h3>
            </div>
        </div>
    );
};

export default GameList;