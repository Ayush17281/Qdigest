import { useEffect, useState } from "react";

function App() {
    const [locations, setLocations] = useState([]);
    const [editingId, setEditingId] = useState(null);

    const [form, setForm] = useState({
        status: "",
        studentCount: 0,
        waitingTime: 0,
        seatCount: 0
    });

    const fetchLocations = () => {
        fetch("http://localhost:5000/api/locations")
            .then((response) => response.json())
            .then((data) => setLocations(data))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        fetchLocations();
    }, []);

    const startEditing = (location) => {
        setEditingId(location._id);

        setForm({
            status: location.status,
            studentCount: location.studentCount,
            waitingTime: location.waitingTime,
            seatCount: location.seatCount
        });
    };

    const updateLocation = async (id) => {
        await fetch(`http://localhost:5000/api/locations/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        });

        setEditingId(null);
        fetchLocations();
    };

    const formatUpdatedTime = (date) => {
        return new Date(date).toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            day: "2-digit",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
    };

    return (
        <div className="app">

            <header>
                <h1>Qdigest</h1>
                <p>Know the queue before you go.</p>
            </header>

            <main>

                {locations.map((location) => (

                    <div className="card" key={location._id}>

                        <h2>{location.name}</h2>

                        <span className={`status ${location.status.toLowerCase()}`}>
                            {location.status}
                        </span>

                        <p>👥 {location.studentCount} students</p>

                        {location.waitingTime > 0 && (
                            <p>⏱️ {location.waitingTime} min wait</p>
                        )}

                        {location.seatCount > 0 && (
                            <p>💺 {location.seatCount} seats</p>
                        )}

                        <p className="updated">
                            {location.updatedAt
                                ? `Updated at ${formatUpdatedTime(location.updatedAt)} IST`
                                : "Not updated yet"}
                        </p>

                        <button onClick={() => startEditing(location)}>
                            Update
                        </button>

                        {editingId === location._id && (

                            <div className="update-form">

                                <label>Status</label>

                                <select
                                    value={form.status}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            status: e.target.value
                                        })
                                    }
                                >
                                    <option value="Low">Low</option>
                                    <option value="Medium">Medium</option>
                                    <option value="High">High</option>
                                </select>


                                <label>Students currently in queue</label>

                                <input
                                    type="number"
                                    value={form.studentCount}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            studentCount: Number(e.target.value)
                                        })
                                    }
                                />


                                <label>Estimated waiting time (minutes)</label>

                                <input
                                    type="number"
                                    value={form.waitingTime}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            waitingTime: Number(e.target.value)
                                        })
                                    }
                                />


                                <label>Available seats</label>

                                <input
                                    type="number"
                                    value={form.seatCount}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            seatCount: Number(e.target.value)
                                        })
                                    }
                                />


                                <button onClick={() => updateLocation(location._id)}>
                                    Save Changes
                                </button>

                            </div>
                        )}

                    </div>

                ))}

            </main>

        </div>
    );
}

export default App;