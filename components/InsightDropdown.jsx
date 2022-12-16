import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InsightDropdown() {
  const router = useRouter();
  const handleCustomerClick = () => {
    router.push("/adminDashboard/insight");
  };
  const handleCompaniesClick = () => {
    router.push("/adminDashboard/insight/insightCompanies");
  };
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2  focus:ring-offset-2 focus:ring-offset-gray-100 item-center text-xl font-bold">
          Insight
          <ChevronDownIcon className="mr-1 ml-2 h-8 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <main className="py-1">
            <Menu.Item>
              {({ active }) => (
                <p
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 cursor-pointer"
                      : "text-gray-500 ",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={handleCustomerClick}
                >
                  Customers
                </p>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <p
                  href="#"
                  className={classNames(
                    active
                      ? "bg-gray-100 text-gray-900 cursor-pointer"
                      : "text-gray-500",
                    "block px-4 py-2 text-sm"
                  )}
                  onClick={handleCompaniesClick}
                >
                  Companies
                </p>
              )}
            </Menu.Item>
          </main>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
