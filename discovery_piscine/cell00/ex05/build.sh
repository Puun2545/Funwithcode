#Building Directory with Arguments and start with ex
dirname="ex"
if [ "$#" -eq 0 ]; then
	echo "No arguments supplied"
else
	for arg in "$@"; do
		concat="$(echo "$dirname")$arg"
		mkdir "$concat"
	done
fi
