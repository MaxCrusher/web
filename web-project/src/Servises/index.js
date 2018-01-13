export const getAllGost = (success) => {
        fetch("/api/gost")
            .then(res => {
                
                return res.json();// res.json()
            }).then(gost => {
                success(gost)
            }).catch(err => {
                console.log(err);
            });
};
export const getAllTituls = (success) => {
    fetch("/api/titul")
        .then(res => {
            return res.json()
        }).then(titul => {
            success(titul)
        }).catch(err => {
            console.log(err);
        });
};
export const getAllReports = (success) => {
    fetch("/api/report")
        .then(res => {
            return res.json()
        }).then(report => {
            success(report)
        }).catch(err => {
            console.log(err);
        });
};