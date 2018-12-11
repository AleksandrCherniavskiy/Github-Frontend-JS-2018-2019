/*level 1*/
do {
  north();
} while ( isFree('north') );

/*level 2*/
while ( isFree('east') ) {
  east();
};

/*level 3*/
do {
  south();

  if ( isFree('east') ) {
    east();
  }
} while( isFree('south') );

/*level 4*/
while (true) {
    if ( isFree('east') ) {
      east();
    } else if ( isFree('south') ) {
      south();
    }
};