# LiftOff

LiftOff is a website to crowdfund great projects and causes. With this website, you can turn an indea into reality.

You can create a campaign of your own or contribute to ones that you believe in. 
 
## Features and Implementation
LiftOff is a full-stack web application inspired by Indiegogo. It uses Ruby on Rails 2.3.1, PostgreSQL database, and React 5.5.1 with a Redux framework on the frontend.
![Alt Text](https://s3-us-west-1.amazonaws.com/liftoff-go-gifs/ezgif.com-video-to-gif+(1).gif)

### Users and Profiles 
The users table stores all profile and user data with password digests and session tokens to keep you logged in. 

### Campaigns

Create a campaign and a view page will show all the information to users. It will keep track of including contributions, timeline, and how much your campaign needs to meet its goal!

```   
update(field){
    return (e)=>(this.setState({[field]:e.target.value}))
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.makeCamp(newInfo).then( payload => {
      this.props.history.push(`/campaigns/${Object.keys(payload.campaign)[0]}`);
    }
  )
}
```

All campaign information is stored in one table in the database. A user foreign key associates the campaign to its creator. 

### Contributions

User will be able to make contributions and receive rewards from a campaign based on their contributions. Contributions act as a joins table connecting a campaign to the users that decide to contribute to that campaign. Posting a contribution will dynamically add to the current funded amount of that campaign.


