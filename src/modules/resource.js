class Movies {
    constructor(){
        this.baseUrl = `https://api.tvmaze.com/shows/169/seasons`;
        this.altUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi`;
    }

    async getData(){
        const response = await fetch(this.baseUrl);
        if(!response.ok) return response.status;
        return response.json();
    }

    async addLike(payload){
        const response = await fetch(`${this.altUrl}/apps/RklMo4z1XKyvDrob0hb8/likes`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });
          if(!response.ok) return response.status;
          return response.json();
    }

    async getLike(){
         const response = await fetch(`${this.altUrl}/apps/RklMo4z1XKyvDrob0hb8/likes`, {
            method : "GET",
            headers: {
                'Content-Type': 'application/json',
              },
         });
         if(!response.ok) return response.status;
         return response.json();
    }
}

export { Movies }; 