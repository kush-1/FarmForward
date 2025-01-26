import { create } from "zustand";

export const useFarmStore = create((set) => ({
    farms: [],
    setFarms: (farms) => set({ farms }),
    createFarm: async (newFarm) => {
        if (!newFarm.name || !newFarm.location || !newFarm.size || !newFarm.image || !newFarm.type || !newFarm.phone || !newFarm.email) {
            return { success: false, message: "Please fill in all the fields." }
        }
        const res = await fetch("/api/farms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newFarm)
        })
        const data = await res.json();
        set((state) => ({ farms: [...state.farms, data.data] }));
        return { success: true, message: "Farm successfully created." }
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
