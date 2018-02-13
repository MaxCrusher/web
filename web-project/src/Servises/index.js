export const getAllGost = (success) => {
        fetch("/api/gosts")
            .then(res => {
                
                return res.json();// res.json()
            }).then(gost => {
                success(gost)
            }).catch(err => {
                console.log(err);
            });
};
export const getAllTituls = (success) => {
    fetch("/api/tituls")
        .then(res => {
            return res.json()
        }).then(titul => {
            success(titul)
        }).catch(err => {
            console.log(err);
        });
};
export const getAllReports = (success) => {
    fetch("/api/reports")
        .then(res => {
            return res.json()
        }).then(report => {
            success(report)
        }).catch(err => {
            console.log(err);
        });
};