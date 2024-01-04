export const Footer = () => {
    return (
        <footer class="bg-grey bottom-0 w-full flex flex-col items-center">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 ">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="/about" className=" hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="/" className="hover:underline">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-gray w-full md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2024 Krave. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}