import { create } from "zustand";

export const useFarmStore = create((set) => ({
    farms: [],
    setFarms: (farms) => set({ farms }),
    createFarm: async (newFarm) => {
        if (!newFarm.name || !newFarm.location || !newFarm.size || !newFarm.image || !newFarm.type || !newFarm.phone || !newFarm.email) {
            return { success: false, message: "Please fill in all the fields." }
        }
        try {
			const res = await fetch("/api/farms", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(newFarm),
			});

			if (!res.ok) {
				// Server returned an error status code
				const errorData = await res.text(); // Get the error message as text
				console.error("Server error:", res.status, errorData);
				return { success: false, message: `Server Error: ${res.status}, ${errorData}` };
			}

			const data = await res.json();
			set((state) => ({ farms: [...state.farms, data.data] }));
			return { success: true, message: "Farm successfully created." }

		} catch (error) {
			// Network error or parsing error
			console.error("Fetch error:", error);
			return { success: false, message: "An error occurred while creating the farm." };
		}
    },
    fetchFarms: async ()=>{
        const res = await fetch("/api/farms");
        const data = await res.json();
        set({farms:data.data});
    },
    deleteFarm: async (pid) => {
		const res = await fetch(`/api/farms/${pid}`, {
			method: "DELETE",
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		set((state) => ({ farms: state.farms.filter((farm) => farm._id !== pid) }));
		return { success: true, message: data.message };
	},
	updateFarm: async (pid, updatedFarm) => {
		const res = await fetch(`/api/farms/${pid}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedFarm),
		});
		const data = await res.json();
		if (!data.success) return { success: false, message: data.message };

		set((state) => ({
			farms: state.farms.map((farm) => (farm._id === pid ? data.data : farm)),
		}));

		return { success: true, message: data.message };
	},
}));
