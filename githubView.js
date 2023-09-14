class GithubView {
  constructor(model, client) {
    this.model = model;
    this.client = client;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');

    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.client.getRepoInfo(repoName, repoData => {
        console.log(repoData);
        //console.log(repoData.full_name)
        //console.log(repoData.description)
        this.display(repoData)
      });
    });
  }


  display(repoData){
    const update = document.querySelector('#repo-name')
    const imageElement = document.querySelector("#avatar")
    //console.log(update)
    //console.log(repoData)
    const update2 = document.querySelector('#repo-description')
    update.textContent = repoData.name
    update2.textContent = repoData.description
    imageElement.src = repoData.organization.avatar_url
    //console.log(imageElement)
    

  }
}

module.exports = GithubView;