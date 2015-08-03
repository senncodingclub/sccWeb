<?php
	/**
	 * This php file serves to update a local git repo that is acting as the 
	 * production copy of a Web site. It is set up to fire whenever someone
	 * pushes changes to the master branch of the repository. 
	 * The file checks that it is called from github as a webhook post pull
	 * It also assumes the directory in which this file resides contains a 
	 * git repository cloned from the corresponding github repo.
	 * (C) 2015 Jonathon E. Cihlar
	 */

		// examine the payload - if there is one proceed
	if ($_REQUEST['payload']) {
		
            // decode the payload
        $payload = json_decode ($_REQUEST['payload'], true);
        
        echo "Pulling repository named: ".$payload['repository']['full_name']."\n";
        echo "Triggered by user: ".$payload['sender']['login']."\n";
			// execute the git pull
        echo "Running git pull\n";
        echo "Results:\n";
        echo shell_exec('git pull');
    }
	else {
		echo "No payload was provided. No action taken.\n";	
	}
?>
