# Architektur

## Setup
Als erstes müssen 3 VM Instanzen auf gcloud erstellt werden.

	
	$ gcloud compute instances create s1-node1 
			--image-family ubuntu-1604-lts 
			--image-project ubuntu-os-cloud 
			--machine-type n1-standard-2 
			--zone europe-west1-d
	$ gcloud compute instances create s1-node2 
			--image-family ubuntu-1604-lts 
			--image-project ubuntu-os-cloud 
			--machine-type n1-standard-2 
			--zone europe-west1-d
	$ gcloud compute instances create s1-node2 
			--image-family ubuntu-1604-lts 
			--image-project ubuntu-os-cloud 
			--machine-type n1-standard-2 
			--zone europe-west1-d

Danach muss auf dem Jumphost ein ssh Key generiert werden.
Hierbei muss umbeding darauf geachtet werden, dass das Zertifikat ceph heist.

	$ ssh-keygen 



Wenn dies gemacht wurde, muss dieser anschliessend auf die erstellten VMs für den User `ceph` kopiert werden. 

Zuvor müssen jedoch auf allen Maschinen Updates und der entsprechende User angelegt werden.

Man verbindet sich nun mit dem gcloud Befehl nacheinander auf alle drei Notes und installiert die Updates. Ebenfalls der User `ceph` muss angelegt werden.

	$ gcloud compute ssh s1-node1

Danach werden die Updates installiert

	$ sudo apt-get update && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y
	$ sudo useradd -d /home/cephd -m cephd -s /bin/bash
	$ sudo passwd cephd
	$ echo "cephd ALL = (root) NOPASSWD:ALL" | sudo tee /etc/sudoers.d/cephd
	$ sudo chmod 0440 /etc/sudoers.d/cephd
	$ sudo su - cephd

Hier wird noch der SSH Key vom Host in die authorized Keys geladen, so dass später per SSH Verbindungen augebaut werden können

	$ mkdir .ssh
	$ vim .ssh/authorized_keys

Wenn dies nun auf allen Drei VMs gemacht wurden, werden diese nun in die `.ssh/config` eingetragen

	Host s1-node1 s1-node2 s1-node3
		User cephd
		IdentityFile ~/.ssh/ceph




## Ceph Installation

Zuerst wird auf dem Jumphost der Ordner ceph erstetlt.


	$ ceph-deploy install s1-node1 s1-node2 s1-node3
	$ ceph-deploy new s1-node1 s1-node2 s1-node3




