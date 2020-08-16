class DataSource {
    
    constructor(onSuccess, onFailed) {
        this.onSuccess = onSuccess;
        this.onFailed = onFailed;
    }
    searchClub(keyword) {
        let filteredClubs = clubs.filter((club) => {
            return club.name.toUpperCase().includes(keyword.toUpperCase());
        });

        if (filteredClubs.length) {
            this.onSuccess(filteredClubs);
        }
        else {
            this.onFailed(`${keyword} is not found`);
        }
    }
}

