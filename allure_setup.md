Installation Allure
===================
```
sudo apt-add-repository ppa:qameta/allure
sudo apt-get update
sudo apt-get install allure
```
Example
-------
```
git clone https://github.com/jaimefrio/pytest_sampler.git
```
Setup and run allure for python
-------------------------------
```
$ pip install allure-pytest
$ py.test --alluredir=%allure_result_folder% ./tests
$ allure serve %allure_result_folder%
```
Example
-------
```
mkdir reports
sudo py.test --alluredir reports #->reports are generated in .json
allure serve reports  #-> Shows Dashboard for ran test cases
```

Output .json created
--------------------
```json
{

    "name":"test_verbose_raises",
    "status":"passed",
    "start":1512502956046,
    "stop":1512502956046,
    "uuid":"f56e19fc-0ef5-486b-b26f-d446752085f4",
    "historyId":"0084fdcb7818cb911b154b22d7b69b10",
    "fullName":"test_raises.test_r1#test_verbose_raises",
    "labels":[
        {
            "name":"framework",
            "value":"pytest"
        },
        {
            "name":"language",
            "value":"cpython3"
        },
        {
            "name":"package",
            "value":"test_raises.test_r1"
        }
    ]

}
```