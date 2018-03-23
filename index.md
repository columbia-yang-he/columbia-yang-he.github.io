# Most Frequent Daily Git Commands

1.	Create a new branch:<br><br>
    **_git checkout -b feature_branch_name_**

2.	Edit, add and commit your files:<br><br>
    **_git add ._**

3. If you want to add all file except one single file:<br><br>
   **_git add -u_**<br><br>
   **_git reset -- main/filename.txt_**

4.	Push your branch to the remote repository:<br><br>
    **_git push -u origin feature_branch_name_**

5.	Delete a local branch:<br><br>
    **_git branch -d feature_branch_name_**    (merged)
    **_git branch -D feature_branch_name_**    (hard deleted unmerged)

6.	Delete a remote branch:<br><br>
    **_git push origin –-delete feature_branch_name_**

7.	Update local master with remote master branch:<br><br>
    **_git pull origin master_**
