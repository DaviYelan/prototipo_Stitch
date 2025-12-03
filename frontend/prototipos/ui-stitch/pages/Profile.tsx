import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-wrap justify-between gap-3">
                <p className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Personal Details</p>
            </div>

            {/* Profile Header */}
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-200 dark:border-transparent">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
                    <div className="flex gap-4 items-center">
                        <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 lg:size-28 flex-shrink-0 border-4 border-white dark:border-white/10 shadow-lg" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuArmOwM3BEB4EXqxs9DTaLBDUZpM4XEKG9qGflWt6QJ7GHPhPLnIbOIGrvdeOJbhA8O1A062FEm_xNJ3XL-xC8PWeA_B_IkqlrAR3XDRowc77ML7J7dfKBbFmAs3j2knIHfjOQ7BlHScBtOcZquxuFkpimRsmJmGQqpQulTtrOc4WtWU_AtTKcSzRvesJV_MHs7BKCf7Hyq00duvbzQb1KLMJqvFZKg74N-Edh7VbXC73ndc1yQzRhhr_WwV3y_KTIsiJm0T_0XY0Ju")' }}></div>
                        <div className="flex flex-col justify-center">
                            <p className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">Username123</p>
                            <p className="text-slate-500 dark:text-[#ad92c9] text-base font-normal leading-normal">Joined: Jan 2023</p>
                        </div>
                    </div>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary/10 dark:bg-primary/20 text-primary text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors">
                        <span className="truncate">Change Avatar</span>
                    </button>
                </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Form Section */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-200 dark:border-transparent">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-500 dark:text-[#ad92c9] mb-1.5" htmlFor="fullName">Full Name</label>
                                <input className="w-full h-11 px-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-border-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent" id="fullName" type="text" defaultValue="John Doe"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 dark:text-[#ad92c9] mb-1.5" htmlFor="email">Email Address</label>
                                <input className="w-full h-11 px-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-border-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent" id="email" type="email" defaultValue="user.email@example.com"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 dark:text-[#ad92c9] mb-1.5" htmlFor="phone">Phone Number</label>
                                <input className="w-full h-11 px-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-border-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-500 dark:text-[#ad92c9] mb-1.5" htmlFor="country">Country</label>
                                <select className="w-full h-11 px-3 rounded-lg bg-background-light dark:bg-background-dark border border-gray-200 dark:border-border-dark text-slate-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent" id="country">
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>Mexico</option>
                                    <option>Spain</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-transparent border border-gray-300 dark:border-border-dark text-slate-600 dark:text-white text-sm font-bold leading-normal hover:bg-gray-100 dark:hover:bg-white/5 transition-colors" type="button">
                                    <span className="truncate">Cancel</span>
                                </button>
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20" type="submit">
                                    <span className="truncate">Save Changes</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Sidebar Info Section */}
                <div className="lg:col-span-1 flex flex-col gap-6">
                    {/* Progress */}
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-200 dark:border-transparent">
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-6 justify-between items-center">
                                <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">Profile Completion</p>
                                <p className="text-slate-900 dark:text-white text-sm font-bold leading-normal">80%</p>
                            </div>
                            <div className="rounded-full bg-primary/10 dark:bg-primary/30 h-2">
                                <div className="h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(115,17,212,0.5)]" style={{ width: '80%' }}></div>
                            </div>
                            <p className="text-slate-500 dark:text-[#ad92c9] text-sm font-normal leading-normal mt-1">Complete your profile to unlock full features.</p>
                        </div>
                    </div>

                    {/* Preferences */}
                    <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg shadow-sm border border-gray-200 dark:border-transparent">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Preferences</h3>
                        <div className="flex flex-col gap-6">
                            <ToggleSwitch label="Receive Email Notifications" defaultChecked />
                            <ToggleSwitch label="Enable Dark Mode" defaultChecked />
                            <ToggleSwitch label="Two-Factor Authentication" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

const ToggleSwitch: React.FC<{label: string; defaultChecked?: boolean}> = ({ label, defaultChecked }) => (
    <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-slate-700 dark:text-white cursor-pointer select-none">{label}</label>
        <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" defaultChecked={defaultChecked} />
            <div className="w-11 h-6 bg-gray-300 dark:bg-border-dark peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
        </label>
    </div>
);

export default Profile;