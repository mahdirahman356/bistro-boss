import { useContext } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { AuthContext } from "../Context/Context";
import { MdOutlinePayments } from "react-icons/md";
import { PiChefHatLight, PiTruck, PiUsersThree } from "react-icons/pi";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




const AdminHome = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const { data: stats = {} } = useQuery({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats')
            return res.data
        }
    })

    const { data: chartData = [] } = useQuery({
        queryKey: ["order-stats"],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data
        }
    })

    // chart for quantity
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // chart for
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    return (
        <div className="w-[95%] mx-auto">
            <SectionTitle
                header='Wellcome back'
            >
            </SectionTitle>
            <div className="my-5">
                <p className="md:text-2xl font-bold">Hi, {user.displayName}</p>
            </div>

            <div>
                <div className="stats stats-vertical lg:stats-horizontal w-full shadow-xl">
                    {/* Revenue  */}
                    <div className="stat flex items-center gap-5">
                        <div>
                            <div className="stat-title">Revenue</div>
                            <div className="stat-value">${parseFloat(stats.revenue).toFixed(2)}</div>
                        </div>
                        <MdOutlinePayments className="text-6xl text-[#D1A054]" />
                    </div>
                    {/* Customers */}
                    <div className="stat flex items-center gap-5">
                        <div>
                            <div className="stat-title">Customers</div>
                            <div className="stat-value">{stats.users}</div>
                        </div>
                        <PiUsersThree className="text-6xl text-[#D1A054]" />
                    </div>
                    {/* Products */}
                    <div className="stat flex items-center gap-5">
                        <div>
                            <div className="stat-title">Products</div>
                            <div className="stat-value">{stats.menuItems}</div>
                        </div>
                        <PiChefHatLight className="text-6xl text-[#D1A054]" />
                    </div>
                    {/* Orders */}
                    <div className="stat flex items-center gap-5">
                        <div>
                            <div className="stat-title">Orders</div>
                            <div className="stat-value">{stats.orders}</div>
                        </div>
                        <PiTruck className="text-6xl text-[#D1A054]" />
                    </div>

                </div>
            </div>

            <div className="flex flex-col lg:flex-row my-20">
                <div className="w-full lg:w-1/2">
                    <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="lg:w-1/2">
                    <ResponsiveContainer width="95%" height={400}> 
                        <PieChart>
                            <Pie
                                data={pieChartData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {pieChartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend></Legend>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;