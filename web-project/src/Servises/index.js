export const getAllGost = (success) => {
        fetch("/api/gost")
            .then(res => {
                return res.json()
            }).then(gost => {
                success(gost)
            }).catch(err => {
                console.log(err);
            });
};