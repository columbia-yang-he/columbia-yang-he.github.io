# Most Frequent Daily Git Commands

1.	Create a new branch:

    **_git checkout -b feature_branch_name_**<br><br>
    
2.	Edit, add and commit your files:

    **_git add ._**<br><br>
    
3. If you want to add all file except one single file:

   **_git add -u_**
   
   **_git reset -- main/filename.txt_**<br><br>
   
4.	Push your branch to the remote repository:

    **_git push -u origin feature_branch_name_**
    
    later when you just want to update your local to remote:
    
    **_git push origin HEAD_**<br><br>
    
5.	Delete a local branch:

    **_git branch -d feature_branch_name_**    (merged)
    
    **_git branch -D feature_branch_name_**    (hard deleted unmerged)<br><br>
    
6.	Delete a remote branch:

    **_git push origin –-delete feature_branch_name_**<br><br>
    
7.	Update your local with remote master branch:<br>

    method 1: **_git pull origin master_**
    
    method 2: step 1: **_git fetch origin_**<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;step 2: **_git merge origin master_** <br><br>

# Google Cloud Platform Fundamentals: Core Infrastructure <br>

The following diagram is a mind map I created for GCP platform after went to the onsite training hosted by Google. <br><br>

![image](./GCP_core_mindtree.png)
