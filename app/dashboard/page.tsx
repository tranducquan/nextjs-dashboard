import {Card} from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import {lusitana} from "@/app/ui/fonts";
import {fetchRevenue, fetchLatestInvoices, fetchCardData} from "@/app/lib/data";

const Page = async () => {
    const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices();
    const {numberOfCustomers, numberOfInvoices, totalPaidInvoices, totalPendingInvoices} = await fetchCardData();

    return (
        <main>
             <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                 Dashboard
             </h1>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                <Card title="Collected" value={totalPaidInvoices} type="collected" />
                <Card title="Pending" value={totalPendingInvoices} type="pending" />
                <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
                <Card title="Total Customers" value={numberOfCustomers} type="customers" />
            </div>
            <div className="grid mt-10 gap-6 grid-cols-1 xl:grid-cols-2">
                <RevenueChart revenue={revenue} />
                <LatestInvoices latestInvoices={latestInvoices}/>
            </div>
        </main>
    );
};

export default Page;