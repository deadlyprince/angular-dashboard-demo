# AngularDashboard

This is a demo dashboard created using [ht-angular](https://github.com/hypertrack/ht-angular)

## Setup
##### 1. Add HyperTrack key
go to `src/app/app.module.ts` and add HyperTrack key in place of demo key.
````typescript
HtModule.forRoot({token: 'sk_xxxxxxxxxxxxx', mapType: 'google'})
````
##### 2. Add google map key
go to `src/index.html` and add your google map key to google map js script tag.
````
  <script src="https://maps.googleapis.com/maps/api/js?key=<KEY>&libraries=geometry"></script>
````
## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

**Note:** For code scaffolding and build it is recommended that you install angular cli globally using `npm i @angular/cli -g`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

