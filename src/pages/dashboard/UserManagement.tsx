import { useEffect, useState } from "react";
import { Table, Button, Popconfirm, message, Spin } from "antd";
import { ColumnsType } from "antd/es/table";
import { UserOutlined } from "@ant-design/icons";

interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    isBlocked: boolean;
}

const UserManagement = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const token = localStorage.getItem("accessToken");
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://bike-shop-server-jade.vercel.app/api/admin/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    credentials: "include",
                });
                const data = await res.json();
                setUsers(data.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const blockUser = async (userId: string) => {
        try {
            const res = await fetch(`https://bike-shop-server-jade.vercel.app/api/admin/users/${userId}/block`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
            });
            const data = await res.json();
            if (data.success) {
                message.success("User has been blocked!");
                setUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user._id === userId ? { ...user, isBlocked: true } : user
                    )
                );
            } else {
                message.error("Failed to block user.");
            }
        } catch (error) {
            console.error("Error blocking user:", error);
            message.error("Something went wrong while blocking the user.");
        }
    };

    const columns: ColumnsType<User> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Status",
            dataIndex: "isBlocked",
            key: "isBlocked",
            render: (isBlocked: boolean) => (isBlocked ? "Blocked" : "Active"),
        },
        {
            title: "Action",
            key: "action",
            render: (_, record: User) => (
                <Popconfirm
                    title={`Are you sure you want to ${record.isBlocked ? "unblock" : "block"} this user?`}
                    onConfirm={() => blockUser(record._id)}
                >
                    <Button type="primary" danger disabled={record.isBlocked} icon={<UserOutlined />}>
                        {record.isBlocked ? "Unblock" : "Block"}
                    </Button>
                </Popconfirm>
            ),
        },
    ];

    if (loading) return <Spin size="large" />;

    return (
        <div>
            <h2>User Management</h2>
            <Table
                rowKey="_id"
                columns={columns}
                dataSource={users}
                pagination={false}
                bordered
            />
        </div>
    );
};

export default UserManagement;
