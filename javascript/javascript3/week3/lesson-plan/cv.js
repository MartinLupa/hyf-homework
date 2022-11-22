class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id
    this.title = title
    this.description = description
    this.startDate = startDate
    this.endDate = endDate
  }
}
class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id
    this.title = title
    this.school = school
    this.address = address
    this.startDate = startDate
    this.endDate = endDate
  }
}

class CV {
  constructor(email) {
    this.jobs = []
    this.educations = []
    this.email = email
  }

  addJob(job) {
    this.jobs.push(job)
  }

  removeJob(job) {
    this.jobs.splice(
      this.jobs.findIndex((existingJob) => existingJob === job),
      1
    )
  }

  addEducation(education) {
    this.educations.push(education)
  }

  removeEducation(education) {
    this.educations.splice(
      this.educations.findIndex(
        (existingEducation) => existingEducation === education
      ),
      1
    )
  }

  renderCV() {
    const cv = document.getElementById("cv")
    const email = document.createElement("h1")
    email.innerText = this.email
    cv.appendChild(email)

    const myEducations = document.createElement("h2")
    cv.appendChild(myEducations)

    const educationList = document.createElement("ul")
    this.educations.forEach((education) => {
      const educationItem = document.createElement("li")
      educationItem.innerText = education
      educationList.appendChild(educationItem)
    })
    cv.appendChild(educationList)

    const myJobs = document.createElement("h2")
    cv.appendChild(myJobs)

    const jobList = document.createElement("ul")
    this.jobs.forEach((job) => {
      const jobItem = document.createElement("li")
      jobItem.innerText = job
      jobList.appendChild(jobItem)
    })
    cv.appendChild(jobList)
  }
}

const myCV = new CV("martinignaciolupa@gmail.com")
myCV.addEducation("Certified Public Accountant")
myCV.addEducation("MSc in Software Design")
myCV.addEducation("Full-Stack Web Development Bootcamp")
myCV.addJob("Bike courier")
myCV.removeJob("Bike courier")
myCV.addJob("Associate Software Engineer")
myCV.addJob("DFDS Student Frontend")
myCV.renderCV()
console.log(myCV)
