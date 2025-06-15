import { Component } from "@angular/core";

@Component({
    selector : "app-lists",
    templateUrl : "./list.component.html",
    styleUrls : ["./list.component.scss"]
})
export class listComponent {
    fruit = "Fruits List"
    fruits = ['Apple', 'Banana', 'Mango', 'Grapes'];

    color = "Colors List"
    colors = ['Red', 'Blue', 'Green', 'Yellow'];

    num = "Numbers List"
    numbers = [1, 2, 3, 4, 5];

    city = "City List"
    cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai']; 

    lang = "Languages List";
    languages = ['English', 'Hindi', 'Marathi', 'Tamil']; 

    country = "county List";
    countries = ['India', 'USA', 'UK', 'Canada'];

    hobby = "Hobbies List";
    hobbies = ['Singing', 'Dancing', 'Painting'];

    course = "Courses List";
    courses1 = ['Angular', 'React', 'Vue'];

    score = "Scores"
    scores = [85, 90, 75, 60];

    month = "Month List";
    months = ['Jan', 'Feb', 'Mar', 'Apr'];

    event = "Event List";
    events1 = ['Login', 'Logout', 'Register'];

    skill = "Skills List";
    skills = ['JavaScript', 'TypeScript', 'Angular'];

    role = "Roles"
    roles = ['Admin', 'Editor', 'User'];

    alert = "Alert"
    alerts = ['Success', 'Error', 'Warning'];

    status = "Status"
    statuses = ['Pending', 'In Progress', 'Completed'];
}