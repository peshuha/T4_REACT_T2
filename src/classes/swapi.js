export class CSWAPI {
    static get UrlPeople() {
        return "https://swapi.dev/api/people";
    }
    static PeopleList(data){
        return data["results"];
    }
    static Name(people){
        if (!people)
            return null;
        return people["name"];
    }
    static Height(people){
        if (!people)
            return null;
        return people["height"];
    }
    static Mass(people){
        if (!people)
            return null;
        return people["mass"];
    }
    static Url(people){
        if (!people)
            return null;
        return people["url"];
    }
    static Gender(people){
        if (!people)
            return null;
        return people["gender"];
    }
}